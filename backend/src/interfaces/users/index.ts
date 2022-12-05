export interface INewUser {
  name: string;
  emails: string[];
  password: string;
  phones: string[];
}

export interface INewUserRequest {
  name: string;
  emails: string;
  password: string;
  phones: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  name?: string;
  emails?: string[];
  password?: string;
  phones?: string[];
}
