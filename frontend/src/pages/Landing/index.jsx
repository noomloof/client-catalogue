// import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import {
  Button,
  ButtonArea,
  Container,
  Content,
  FirstImage,
  FirstSection,
  Modal,
  ModalBox,
  Punchline,
  SecondSection,
  TextArea,
} from './styles';
import secure_files from '../../assets/secure_files.svg';
import secure_server from '../../assets/secure_server.svg';
import { useContext, useState } from 'react';
import { ShowLoginContext } from '../../providers/showLogin';
import { ShowLoginAnimationContext } from '../../providers/showLoginAnimation';

const Landing = () => {
  const { showLogin, setShowLogin } = useContext(ShowLoginContext);
  const { showLoginAnimation, setShowLoginAnimation } = useContext(
    ShowLoginAnimationContext
  );

  function bodyClickHandler(e) {
    console.log(e.target.classList);
    if (e.target.classList.contains('dark-bg')) {
      setShowLoginAnimation(false);
      setTimeout(() => {
        setShowLogin(false);
      }, 399);
    }
  }

  function closeModalHandler() {
    setShowLoginAnimation(false);
    setTimeout(() => {
      setShowLogin(false);
    }, 399);
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
              <div>Cadastrar tecnologia</div>{' '}
              <div
                onClick={closeModalHandler}
                className='close'
              >
                &times;
              </div>{' '}
            </header>
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
            <Button>Get registering!</Button>
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
