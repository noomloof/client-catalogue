import {
  Button,
  Container,
  DetailSection,
  FillerSection,
  FormSection,
  InputContainer,
  TextBox,
} from './styles';
import logo from '../../assets/transparentlogo.svg';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const [nameInput, setNameInput] = useState('');
  const [emailsInput, setEmailsInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [phonesInput, setPhonesInput] = useState('');

  const schema = yup.object().shape({
    name: yup.string().required('Required field'),
    email: yup
      .array()
      .transform(function (value, originalValue) {
        if (this.isType(value) && value !== null) {
          return value;
        }
        return originalValue ? originalValue.split(/[\s,]+/) : [];
      })
      .of(yup.string().email().required('Required field')),
    password: yup.string().required('Required field'),
    phone: yup
      .array()
      .transform(function (value, originalValue) {
        if (this.isType(value) && value !== null) {
          return value;
        }
        return originalValue ? originalValue.split(/[\s,]+/) : [];
      })
      .of(yup.string().required('Required field')),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = ({ name, email, password, phone }) => {
    const newUser = { name, emails: email.join(','), password, phones: phone };
    const login = { email: email[0], password };

    api
      .post('/users', newUser)
      .then((response) => {
        console.log(response);
        api.post('/login', login).then((response) => {
          console.log(response);
          console.log(document.cookie);
          history.push('/catalog');
        });
      })
      .catch((error) => {
        toast.error(error.response.data.message, { autoClose: 1000 });
      });
  };

  return (
    <Container>
      <FillerSection>
        <img
          src={logo}
          alt='logo'
        ></img>
        <TextBox>
          <h2>This pun was not intended,</h2>
          <h2>but we still hope you can </h2>
          <h2>make use of our services.</h2>
        </TextBox>
        <TextBox>
          <h2 className='instructions'>1. Create an account</h2>
          <h3>Don't worry, we won't send</h3>
          <h3>you any emails... unless?</h3>
        </TextBox>
        <TextBox>
          <h2 className='instructions'>2. Register your clients </h2>
          <h3>Maybe you still need that </h3>
          <h3>Excel sheet or Google doc. </h3>
          <h3>
            <i>Fur</i> the last time, though.
          </h3>
        </TextBox>
        <TextBox>
          <h2 className='instructions'>3. That's it </h2>
          <h3>You've got your clients in!</h3>
          <h3>Uhm... yeah, that's it.</h3>
          <h3>Oh, we use cookies by the way.</h3>
        </TextBox>
      </FillerSection>
      <FormSection>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <InputContainer>
            <input
              {...register('name')}
              type='text'
              value={nameInput}
              name='name'
              onChange={(e) => setNameInput(e.target.value)}
            />
            <label htmlFor='name'> Full name </label>
            <section> {errors.name?.message} </section>
          </InputContainer>
          <DetailSection>
            {' '}
            *If you have multiple emails, separate them with commas{' '}
          </DetailSection>
          <InputContainer>
            <input
              {...register('email')}
              type='text'
              value={emailsInput}
              name='email'
              onChange={(e) => setEmailsInput(e.target.value)}
            />
            <label htmlFor='email'> Email </label>
            <section> {errors.email?.message} </section>
          </InputContainer>
          <InputContainer>
            <input
              {...register('password')}
              type='password'
              value={passwordInput}
              name='password'
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <label htmlFor='password'> Password </label>
            <section> {errors.password?.message} </section>
          </InputContainer>
          <DetailSection>
            {' '}
            *If you have multiple phone numbers, separate them with commas{' '}
          </DetailSection>
          <InputContainer>
            <input
              {...register('phone')}
              type='text'
              value={phonesInput}
              name='phone'
              onChange={(e) => setPhonesInput(e.target.value)}
            />
            <label htmlFor='phone'> Phone </label>
            <section> {errors.phone?.message} </section>
          </InputContainer>
          <InputContainer>
            <Button type='submit'> Create account </Button>
          </InputContainer>
        </form>
      </FormSection>
    </Container>
  );
};

export default Register;
