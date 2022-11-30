export interface INewClient {
  name: string;
  emails: string[];
  phones: string[];
}

export interface IUpdateClient {
  name?: string;
  emails?: string[];
  phones?: string[];
}
