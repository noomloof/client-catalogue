// import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import {
  Button,
  ButtonArea,
  Container,
  Content,
  FirstImage,
  FirstSection,
  InputContainer,
  Modal,
  ModalBox,
  ModalButton,
  ModalForm,
  Punchline,
  SecondSection,
  TextArea,
} from './styles';
import secure_files from '../../assets/secure_files.svg';
import secure_server from '../../assets/secure_server.svg';
import { useContext, useState } from 'react';
import { ShowLoginContext } from '../../providers/showLogin';
import { ShowLoginAnimationContext } from '../../providers/showLoginAnimation';
import { IoCloseSharp } from 'react-icons/io5';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const Landing = () => {
  const [emailsInput, setEmailsInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const { showLogin, setShowLogin } = useContext(ShowLoginContext);
  const { showLoginAnimation, setShowLoginAnimation } = useContext(
    ShowLoginAnimationContext
  );

  const schema = yup.object().shape({
    email: yup.string().email().required('Required field'),
    password: yup.string().required('Required field'),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = ({ email, password }) => {
    const loginInfo = { email, password };

    api
      .post('/login', loginInfo)
      .then((response) => {
        console.log(response);
        setShowLoginAnimation(false);
        setShowLogin(false);
        history.push('/catalog');
      })
      .catch((error) => {
        toast.error(error.response.data.message, { autoClose: 1000 });
      });
  };

  function bodyClickHandler(e) {
    if (e.target.classList.contains('dark-bg')) {
      setShowLoginAnimation(false);
      setTimeout(() => {
        setShowLogin(false);
      }, 499);
    }
  }

  function closeModalHandler() {
    setShowLoginAnimation(false);
    setTimeout(() => {
      setShowLogin(false);
    }, 499);
  }

  return (
    <Container>
      {showLogin && (
        <Modal
          onClick={bodyClickHandler}
          className='dark-bg'
        >
          <ModalBox showLoginAnimation={showLoginAnimation}>
            {' '}
            <header>
              {' '}
              <div> &nbsp; </div>{' '}
              <div
                onClick={closeModalHandler}
                className='close'
              >
                <IoCloseSharp />
              </div>{' '}
            </header>
            <ModalForm>
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <InputContainer>
                  <input
                    {...register('email')}
                    type='text'
                    value={emailsInput}
                    name='email'
                    onChange={(e) => setEmailsInput(e.target.value)}
                  />
                  <label htmlFor='email'> Your email </label>
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
                  <label htmlFor='password'> Your password </label>
                  <section> {errors.password?.message} </section>
                </InputContainer>
                <InputContainer>
                  <ModalButton type='submit'> Login </ModalButton>
                </InputContainer>
              </form>
            </ModalForm>
          </ModalBox>
        </Modal>
      )}

      <Header />
      <Content>
        <FirstSection>
          <Punchline>
            {' '}
            <h1>
              {' '}
              <span id='horrible'>A CATalog.</span>
            </h1>{' '}
            <p>
              {' '}
              Not <i>fur</i> cats, but <i>fur</i> you.{' '}
            </p>
            <p> Secure, quick and easy. </p>
          </Punchline>
          <FirstImage>
            {' '}
            <img
              src={secure_files}
              alt='securef'
            />{' '}
            <img
              src={secure_server}
              alt='secures'
            />{' '}
          </FirstImage>
        </FirstSection>
        <SecondSection>
          <ButtonArea>
            <Button onClick={() => history.push('/register')}>
              Get registering!
            </Button>
          </ButtonArea>
          <TextArea>
            <p>
              You don't need pen and paper, nor a <i>.docx</i> or <i>.xls</i>.
            </p>
            <p id='longer-text'>
              Effectively register your clients, and we'll display <br />
              all that <i>infurmation</i>, right here.
            </p>
          </TextArea>
        </SecondSection>
      </Content>
    </Container>
  );
};

export default Landing;
