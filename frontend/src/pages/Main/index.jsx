import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import api from '../../services/api';
import {
  AddButton,
  AddSection,
  CancelButton,
  ClientContainer,
  ConfirmButton,
  Container,
  DeleteButtonsContainer,
  DeleteModalBox,
  EditModalBox,
  EditModalButton,
  EmptyClientList,
  InputContainer,
  Modal,
  ModalBox,
  ModalButton,
  ModalForm,
  PopulatedClientList,
  TitleAddContainer,
  TitleSection,
} from './styles';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { AiOutlinePlus } from 'react-icons/ai';
import { ShowClientRegisterAnimationContext } from '../../providers/showClientRegisterAnimation';
import { ShowClientRegisterContext } from '../../providers/showClientRegister';
import { IoCloseSharp } from 'react-icons/io5';
import ClientCard from '../../components/ClientCard';
import { ShowClientEditAnimationContext } from '../../providers/showClientEditAnimation';
import { ShowClientEditContext } from '../../providers/showClientEdit';
import { ShowClientDeleteContext } from '../../providers/showClientDelete';
import { ShowClientDeleteAnimationContext } from '../../providers/showClientDeleteAnimation';
import { TargetIdContext } from '../../providers/targetId';

const Main = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMain] = useState(true);
  const [nameInput, setNameInput] = useState('');
  const [emailsInput, setEmailsInput] = useState('');
  const [phonesInput, setPhonesInput] = useState('');
  const [editNameInput, setEditNameInput] = useState('');
  const [editEmailsInput, setEditEmailsInput] = useState('');
  const [editPhonesInput, setEditPhonesInput] = useState('');

  const { showClientRegister, setShowClientRegister } = useContext(
    ShowClientRegisterContext
  );
  const { showClientRegisterAnimation, setShowClientRegisterAnimation } =
    useContext(ShowClientRegisterAnimationContext);
  const { showClientEdit, setShowClientEdit } = useContext(
    ShowClientEditContext
  );
  const { showClientEditAnimation, setShowClientEditAnimation } = useContext(
    ShowClientEditAnimationContext
  );
  const { showClientDelete, setShowClientDelete } = useContext(
    ShowClientDeleteContext
  );
  const { showClientDeleteAnimation, setShowClientDeleteAnimation } =
    useContext(ShowClientDeleteAnimationContext);
  const { targetId } = useContext(TargetIdContext);

  const loadClients = () => {
    api
      .get('/clients/list')
      .then((response) => {
        setClients(response.data);
        setIsLoading(true);
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error('Something went wrong. Redirecting you...', {
          autoClose: 1000,
        });
        setTimeout(() => {
          history.push('/');
        }, 1999);
      });
  };

  useEffect(() => {
    loadClients();
  }, []);

  const schema = yup.object().shape({
    name: yup.string().required('Required field'),
    email: yup.string().email().required('Required field'),
    phone: yup.string().required('Required field'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  function bodyClickHandler(e) {
    if (e.target.classList.contains('dark-bg')) {
      setShowClientRegisterAnimation(false);
      setShowClientEditAnimation(false);
      setShowClientDeleteAnimation(false);
      setTimeout(() => {
        setShowClientRegister(false);
        setShowClientDelete(false);
        setShowClientEdit(false);
      }, 499);
    }
  }

  function closeModalHandler() {
    setShowClientRegisterAnimation(false);
    setShowClientEditAnimation(false);
    setShowClientDeleteAnimation(false);
    setTimeout(() => {
      setShowClientRegister(false);
      setShowClientDelete(false);
      setShowClientEdit(false);
    }, 499);
  }

  const onSubmitHandler = ({ name, email, phone }) => {
    const newClient = { name, emails: email, phones: phone };

    api
      .post('clients', newClient)
      .then((response) => {
        toast.success('Client registered successfully', { autoClose: 1000 });
        loadClients();
        setTimeout(() => {
          closeModalHandler();
        }, 1);
      })
      .catch((error) => {
        toast.error(error.response.data.message, { autoClose: 1000 });
        loadClients();
      });
  };

  const editSubmitHandler = (e) => {
    e.preventDefault();
    const editedClient = {
      name: editNameInput,
      emails: editEmailsInput,
      phones: editPhonesInput,
    };

    api
      .patch(`/clients/edit/${targetId}`, editedClient)
      .then((response) => {
        toast.success('Client edited successfully', { autoClose: 1000 });
        loadClients();
        setTimeout(() => {
          closeModalHandler();
        }, 1);
      })
      .catch((error) => {
        toast.error(error.response.data.message, { autoClose: 1000 });
        loadClients();
      });
  };

  const confirmDeleteHandler = (e) => {
    e.preventDefault();
    api
      .delete(`/clients/delete/${targetId}`)
      .then((response) => {
        toast.success('Client deleted successfully', { autoClose: 1000 });
        setTimeout(() => {
          loadClients();
          closeModalHandler();
        }, 500);
      })
      .catch((error) => {
        toast.error(error.response.data.message, { autoClose: 1000 });
        loadClients();
        closeModalHandler();
      });
  };

  return (
    <Container>
      {isLoading && (
        <>
          {showClientRegister && (
            <Modal
              onClick={bodyClickHandler}
              className='dark-bg'
            >
              <ModalBox
                showClientRegisterAnimation={showClientRegisterAnimation}
              >
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
                        {...register('name')}
                        type='text'
                        value={nameInput}
                        name='name'
                        onChange={(e) => setNameInput(e.target.value)}
                        autoComplete='off'
                      />
                      <label htmlFor='name'> Client's name </label>
                      <section> {errors.name?.message} </section>
                    </InputContainer>
                    <InputContainer>
                      <input
                        {...register('email')}
                        type='text'
                        value={emailsInput}
                        name='email'
                        onChange={(e) => setEmailsInput(e.target.value)}
                        autoComplete='off'
                      />
                      <label htmlFor='email'> Client's email </label>
                      <section> {errors.email?.message} </section>
                    </InputContainer>
                    <InputContainer>
                      <input
                        {...register('phone')}
                        type='text'
                        value={phonesInput}
                        name='phone'
                        onChange={(e) => setPhonesInput(e.target.value)}
                        autoComplete='off'
                      />
                      <label htmlFor='phone'> Client's phone </label>
                      <section> {errors.phone?.message} </section>
                    </InputContainer>
                    <InputContainer>
                      <ModalButton type='submit'> Register </ModalButton>
                    </InputContainer>
                  </form>
                </ModalForm>
              </ModalBox>
            </Modal>
          )}

          {showClientEdit && (
            <Modal
              onClick={bodyClickHandler}
              className='dark-bg'
            >
              <EditModalBox showClientEditAnimation={showClientEditAnimation}>
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
                  <form onSubmit={(e) => editSubmitHandler(e)}>
                    <InputContainer>
                      <input
                        type='text'
                        value={editNameInput}
                        name='name'
                        onChange={(e) => setEditNameInput(e.target.value)}
                        autoComplete='off'
                      />
                      <label htmlFor='name'> Client's name </label>
                    </InputContainer>
                    <InputContainer>
                      <input
                        type='text'
                        value={editEmailsInput}
                        name='email'
                        onChange={(e) => setEditEmailsInput(e.target.value)}
                        autoComplete='off'
                      />
                      <label htmlFor='email'> Client's email </label>
                    </InputContainer>
                    <InputContainer>
                      <input
                        type='text'
                        value={editPhonesInput}
                        name='phone'
                        onChange={(e) => setEditPhonesInput(e.target.value)}
                        autoComplete='off'
                      />
                      <label htmlFor='phone'> Client's phone </label>
                    </InputContainer>
                    <InputContainer>
                      <EditModalButton type='submit'> Edit </EditModalButton>
                    </InputContainer>
                  </form>
                </ModalForm>
              </EditModalBox>
            </Modal>
          )}

          {showClientDelete && (
            <Modal
              onClick={bodyClickHandler}
              className='dark-bg'
            >
              <DeleteModalBox
                showClientDeleteAnimation={showClientDeleteAnimation}
              >
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
                <h3> Are you sure you want to delete this client? </h3>
                <DeleteButtonsContainer>
                  <CancelButton onClick={() => closeModalHandler()}>
                    Cancel
                  </CancelButton>
                  <ConfirmButton onClick={(e) => confirmDeleteHandler(e)}>
                    Confirm
                  </ConfirmButton>
                </DeleteButtonsContainer>
              </DeleteModalBox>
            </Modal>
          )}

          <Header isMain={isMain} />
          <TitleAddContainer>
            <TitleSection>
              <h1>Your clients</h1>
            </TitleSection>
            <AddSection>
              <AddButton
                onClick={() => {
                  setShowClientRegisterAnimation(true);
                  setShowClientRegister(true);
                }}
              >
                <AiOutlinePlus /> New client
              </AddButton>
            </AddSection>
          </TitleAddContainer>
          <ClientContainer>
            {clients.length === 0 ? (
              <>
                <EmptyClientList>
                  <p>Seems like you still haven't registered anyone.</p>
                </EmptyClientList>
              </>
            ) : (
              <>
                <PopulatedClientList>
                  {clients.map((client) => (
                    <ClientCard
                      setEditNameInput={setEditNameInput}
                      setEditEmailsInput={setEditEmailsInput}
                      setEditPhonesInput={setEditPhonesInput}
                      key={client.id}
                      clientId={client.id}
                      emails={client.emails}
                      name={client.name}
                      phones={client.phones}
                    />
                  ))}
                </PopulatedClientList>
              </>
            )}
          </ClientContainer>
        </>
      )}
    </Container>
  );
};

export default Main;
