import { INewClientRequest } from '../../interfaces/clients';
import { INewUserRequest, IUserLogin } from '../../interfaces/users';

// ==================================================================================================
// ================= ~~~~~ ================= USER MOCK DATA ================= ~~~~~ =================
// ==================================================================================================

export const user200: INewUserRequest = {
  name: 'Netuno da Silva',
  emails: 'galaxia1@mail.com',
  password: 'galaxys20',
  phones: '2139393939',
};

export const login200: IUserLogin = {
  email: 'galaxia1@mail.com',
  password: 'galaxys20',
};

export const userEditData = {
  emails: 'estrela1@gmail.com',
};

export const multipleEmailUserEditData = {
  emails: 'estrela1@gmail.com, estrela2@gmail.com',
};

export const alreadyRegisteredEmailEditData = {
  emails: 'estrela1@gmail.com, estrela2@gmail.com, galaxia3@gmail.com',
};

export const secondUser200: INewUserRequest = {
  name: 'Netuno da Silva',
  emails: 'galaxia2@gmail.com, galaxia3@gmail.com',
  password: 'galaxys20',
  phones: '2139393921',
};

export const loginSecondUser: IUserLogin = {
  email: 'galaxia2@gmail.com',
  password: 'galaxys20',
};

export const thirdUser200: INewUserRequest = {
  name: 'Netuno da Silva',
  emails: 'galaxia4@hmail.com, galaxia5@hmail.com, galaxia6@hmail.com',
  password: 'galaxys20',
  phones: '2139393921, 2192391932 ',
};

export const userDupeEmail = {
  name: 'Netuno da Silva',
  emails: 'galaxia2@gmail.com',
  password: 'galaxys20',
  phones: '2139393921',
};

export const userMissingData = {
  name: 'Netuno da Silva',
  emails: 'galaxia2@gmail.com',
  password: 'galaxys20',
};

export const userLoginMissingData = {
  email: 'galaxia1@gmail.com',
};
// ==================================================================================================
// ================= ~~~~ ================= CLIENT MOCK DATA ================= ~~~~ =================
// ==================================================================================================

export const clientData: INewClientRequest = {
  name: 'Saturno Gonçalves',
  emails: 'cometa1@gmail.com',
  phones: '99991111',
};

export const secondClientData: INewClientRequest = {
  name: 'Saturno Gonçalves',
  emails: 'cometa2@gmail.com, cometa3@gmail.com',
  phones: '99991111',
};

export const dummyClientData: INewClientRequest = {
  name: 'Saturno Gonçalves',
  emails: 'cometa24@gmail.com',
  phones: '99991111',
};

export const editClientData = {
  emails: 'cometa4@gmail.com',
};

export const twoEmailEditClientData = {
  emails: 'cometa1@gmail.com, cometa4@gmail.com',
};
