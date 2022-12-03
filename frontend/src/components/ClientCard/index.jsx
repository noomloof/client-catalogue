import {
  Container,
  DataContainer,
  DeleteIconContainer,
  EditIconContainer,
  EmailDiv,
  EmailsContainer,
  NameContainer,
  OptionsContainer,
  PhoneDiv,
  PhonesContainer,
} from './styles';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useForm } from 'react-hook-form';
import { TbEdit } from 'react-icons/tb';
import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { ShowClientEditContext } from '../../providers/showClientEdit';
import { ShowClientEditAnimationContext } from '../../providers/showClientEditAnimation';
import { ShowClientDeleteContext } from '../../providers/showClientDelete';
import { ShowClientDeleteAnimationContext } from '../../providers/showClientDeleteAnimation';
import { TargetIdContext } from '../../providers/targetId';

const ClientCard = ({
  clientId,
  emails,
  name,
  phones,
  setEditNameInput,
  setEditEmailsInput,
  setEditPhonesInput,
}) => {
  const { setShowClientEdit } = useContext(ShowClientEditContext);
  const { setShowClientEditAnimation } = useContext(
    ShowClientEditAnimationContext
  );
  const { setShowClientDelete } = useContext(ShowClientDeleteContext);
  const { setShowClientDeleteAnimation } = useContext(
    ShowClientDeleteAnimationContext
  );
  const { setTargetId } = useContext(TargetIdContext);

  return (
    <Container>
      <OptionsContainer>
        <EditIconContainer>
          <TbEdit
            onClick={() => {
              setShowClientEditAnimation(true);
              setShowClientEdit(true);
              setTargetId(clientId);
              setEditNameInput(name);
              setEditEmailsInput(emails.join(', '));
              setEditPhonesInput(phones.join(', '));
            }}
          />
        </EditIconContainer>
        <DeleteIconContainer>
          <MdDelete
            onClick={() => {
              setShowClientDeleteAnimation(true);
              setShowClientDelete(true);
              setTargetId(clientId);
            }}
          />
        </DeleteIconContainer>
      </OptionsContainer>
      <DataContainer>
        {' '}
        <NameContainer>{name}</NameContainer>{' '}
        <EmailsContainer>
          {' '}
          {emails.map((email) => (
            <EmailDiv> {email} </EmailDiv>
          ))}{' '}
        </EmailsContainer>
        <PhonesContainer>
          {' '}
          {phones.map((phone) => (
            <PhoneDiv>
              {' '}
              {`(${phone.substring(0, 2)}) ${phone.substring(
                2,
                phone.length
              )} `}{' '}
            </PhoneDiv>
          ))}{' '}
        </PhonesContainer>
      </DataContainer>
    </Container>
  );
};

export default ClientCard;
