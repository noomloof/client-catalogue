import { DataSource, TableForeignKey } from 'typeorm';
import request from 'supertest';
import AppDataSource from '../../../data-source';
import app from '../../../app';
import { DataType, newDb } from 'pg-mem';
import {
  alreadyRegisteredEmailEditData,
  clientData,
  dummyClientData,
  editClientData,
  login200,
  loginSecondUser,
  multipleEmailUserEditData,
  secondClientData,
  secondUser200,
  thirdUser200,
  twoEmailEditClientData,
  user200,
  userDupeEmail,
  userEditData,
  userLoginMissingData,
  userMissingData,
} from '../../mocks';
import { clearEverythingQueryBuilder } from '../../../utils';

describe('/users', () => {
  let connection: DataSource;
  let userToken: string;
  let userId: string;
  let clientId: string;
  let client2Id: string;
  const FAKE_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzYzlkYjViMi03ZjE5LTQ3ZDMtYWZjNS1lNGQ3ZTY0M2UwOGIiLCJpYXQiOjE2NzAyNTE1MjQsImV4cCI6MTY3MDMzNzkyNH0.H-SLY1g1HJ-NpCS6FITe5cqYBmkgiExSikimIBATATA';
  const FAKE_UUID = '6ab0582e-0c64-4b0b-83f5-5f294d4a0eb5';

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error('Error during Data Source initialization', err);
      });
  });

  afterAll(async () => {
    await clearEverythingQueryBuilder();
    await connection.destroy();
  });

  test('POST /users - Should be able to create a user', async () => {
    const response = await request(app).post('/users').send(user200);

    userId = response.body.id;

    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('emails');
    expect(response.body).toHaveProperty('phones');
    expect(response.body).toHaveProperty('created_at');
    expect(response.body.emails).toHaveLength(1);
    expect(response.body.phones).toHaveLength(1);
    expect(response.body).not.toHaveProperty('password');
    expect(response.status).toBe(201);
  });

  test('POST /users - Should be able to create a user with multiple emails', async () => {
    const response = await request(app).post('/users').send(secondUser200);

    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('emails');
    expect(response.body).toHaveProperty('phones');
    expect(response.body).toHaveProperty('created_at');
    expect(response.body.emails).toHaveLength(2);
    expect(response.body.phones).toHaveLength(1);
    expect(response.body).not.toHaveProperty('password');
    expect(response.status).toBe(201);
  });

  test('POST /users - Should be able to create a user with multiple emails and phones', async () => {
    const response = await request(app).post('/users').send(thirdUser200);

    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('emails');
    expect(response.body).toHaveProperty('phones');
    expect(response.body).toHaveProperty('created_at');
    expect(response.body.emails).toHaveLength(3);
    expect(response.body.phones).toHaveLength(2);
    expect(response.body).not.toHaveProperty('password');
    expect(response.status).toBe(201);
  });

  test('POST /users - Should not be able to create a user with an already registered email', async () => {
    const response = await request(app).post('/users').send(userDupeEmail);

    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toEqual(
      expect.stringContaining(userDupeEmail.emails)
    );
    expect(response.status).toBe(409);
  });

  test('POST /users - Should not be able to create a user with missing information', async () => {
    const response = await request(app).post('/users').send(userMissingData);

    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toEqual(
      expect.stringContaining('Missing data')
    );
    expect(response.status).toBe(422);
  });

  test('POST /login - Should be able to login', async () => {
    const response = await request(app).post('/login').send(login200);

    userToken = response.body.token;

    console.log(userToken.length);
    console.log(userToken);

    expect(response.body).toHaveProperty('token');
    expect(response.status).toBe(200);
  });

  test('POST /login - Should not be able to login with missing information', async () => {
    const response = await request(app)
      .post('/login')
      .send(userLoginMissingData);

    expect(response.body).toHaveProperty('message');
    expect(response.status).toBe(422);
  });

  test('GET /users/profile - Should be able to list the user itself', async () => {
    const response = await request(app)
      .get('/users/profile')
      .set('Authorization', `Bearer ${userToken}`);

    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('emails');
    expect(response.body).toHaveProperty('phones');
    expect(response.body).toHaveProperty('created_at');
    expect(response.body.emails).toHaveLength(1);
    expect(response.body.phones).toHaveLength(1);
    expect(response.body).not.toHaveProperty('password');
    expect(response.status).toBe(200);
  });

  test('GET /users/profile - Should not be able to access a profile without an authorization token', async () => {
    const response = await request(app).get('/users/profile');

    expect(response.body).toHaveProperty('message');
    expect(response.status).toBe(401);
  });

  test('GET /users/profile - Should not be able to access a profile with an invalid authorization token', async () => {
    const response = await request(app)
      .get('/users/profile')
      .set('Authorization', `Bearer ${FAKE_TOKEN}`);

    expect(response.body).toHaveProperty('message');
    expect(response.status).toBe(401);
  });

  test('PATCH /users/edit - Should be able to edit the user itself', async () => {
    const edit = await request(app)
      .patch('/users/edit')
      .send(userEditData)
      .set('Authorization', `Bearer ${userToken}`);

    const response = await request(app)
      .get('/users/profile')
      .set('Authorization', `Bearer ${userToken}`);

    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('emails');
    expect(response.body).toHaveProperty('phones');
    expect(response.body).toHaveProperty('created_at');
    expect(response.body.emails).toHaveLength(1);
    expect(response.body.emails[0]).toEqual('estrela1@gmail.com');
    expect(response.body.phones).toHaveLength(1);
    expect(response.body).not.toHaveProperty('password');
    expect(edit.status).toBe(204);
    expect(response.status).toBe(200);
  });

  test('PATCH /users/edit - Should be able to add more than one email when editing the user itself', async () => {
    const edit = await request(app)
      .patch('/users/edit')
      .send(multipleEmailUserEditData)
      .set('Authorization', `Bearer ${userToken}`);

    const response = await request(app)
      .get('/users/profile')
      .set('Authorization', `Bearer ${userToken}`);

    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('emails');
    expect(response.body).toHaveProperty('phones');
    expect(response.body).toHaveProperty('created_at');
    expect(response.body.emails).toHaveLength(2);
    expect(response.body.emails[0]).toEqual('estrela1@gmail.com');
    expect(response.body.emails[1]).toEqual('estrela2@gmail.com');
    expect(response.body.phones).toHaveLength(1);
    expect(response.body).not.toHaveProperty('password');
    expect(edit.status).toBe(204);
    expect(response.status).toBe(200);
  });

  test('PATCH /users/edit - Should not be able to edit the user itself without an authorization token', async () => {
    const response = await request(app)
      .patch('/users/edit')
      .send(alreadyRegisteredEmailEditData);

    expect(response.body).toHaveProperty('message');
    expect(response.status).toBe(401);
  });

  test('PATCH /users/edit - Should not be able to edit the user itself with an invalid authorization token', async () => {
    const response = await request(app)
      .patch('/users/edit')
      .send(alreadyRegisteredEmailEditData)
      .set('Authorization', `Bearer ${FAKE_TOKEN}`);

    expect(response.body).toHaveProperty('message');
    expect(response.status).toBe(401);
  });

  test('PATCH /users/edit - Should not be able to add an already registered email when editing the user itself', async () => {
    const response = await request(app)
      .patch('/users/edit')
      .send(alreadyRegisteredEmailEditData)
      .set('Authorization', `Bearer ${userToken}`);

    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toEqual(
      expect.stringContaining('galaxia3@gmail.com')
    );
    expect(response.status).toBe(409);
  });

  test('DELETE /users/delete - Should be able to delete the user itself', async () => {
    const login = await request(app).post('/login').send(loginSecondUser);

    const deleteUser = await request(app)
      .delete('/users/delete')
      .set('Authorization', `Bearer ${login.body.token}`);

    const response = await request(app)
      .get('/users/profile')
      .set('Authorization', `Bearer ${login.body.token}`);

    expect(deleteUser.status).toBe(204);
    expect(response.status).toBe(404);
  });

  test('DELETE /users/delete - Should not be able to delete the user itself without an authorization token', async () => {
    const deleteUser = await request(app).delete('/users/delete');

    expect(deleteUser.body).toHaveProperty('message');
    expect(deleteUser.status).toBe(401);
  });

  test('DELETE /users/delete - Should not be able to delete the user itself with an invalid authorization token', async () => {
    const deleteUser = await request(app)
      .delete('/users/delete')
      .set('Authorization', `Bearer ${FAKE_TOKEN}`);

    expect(deleteUser.body).toHaveProperty('message');
    expect(deleteUser.status).toBe(401);
  });

  test('POST /clients - Should be able to register a client', async () => {
    const response = await request(app)
      .post('/clients')
      .send(clientData)
      .set('Authorization', `Bearer ${userToken}`);

    clientId = response.body.id;

    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('emails');
    expect(response.body.emails).toHaveLength(1);
    expect(response.body).toHaveProperty('phones');
    expect(response.body.phones).toHaveLength(1);
    expect(response.body).toHaveProperty('user');
    expect(response.body.user).toHaveProperty('id');
    expect(response.body.user).toHaveProperty('name');
    expect(response.body.user.id).toEqual(userId);
    expect(response.status).toBe(201);
  });

  test('POST /clients - Should be able to register a client with multiple emails', async () => {
    const response = await request(app)
      .post('/clients')
      .send(secondClientData)
      .set('Authorization', `Bearer ${userToken}`);

    const emails = secondClientData.emails
      .split(',')
      .map((element) => element.trim());

    client2Id = response.body.id;

    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('emails');
    expect(response.body.emails).toHaveLength(2);
    expect(response.body.emails[0]).toEqual(emails[0]);
    expect(response.body.emails[1]).toEqual(emails[1]);
    expect(response.body).toHaveProperty('phones');
    expect(response.body.phones).toHaveLength(1);
    expect(response.body).toHaveProperty('user');
    expect(response.body.user).toHaveProperty('id');
    expect(response.body.user).toHaveProperty('name');
    expect(response.body.user.id).toEqual(userId);
    expect(response.status).toBe(201);
  });

  test('POST /clients - Should not be able to register a client without an authorization token', async () => {
    const response = await request(app).post('/clients').send(user200);

    expect(response.body).toHaveProperty('message');
    expect(response.status).toBe(401);
  });

  test('POST /clients - Should not be able to register a client with an invalid authorization token', async () => {
    const response = await request(app)
      .post('/clients')
      .send(user200)
      .set('Authorization', `Bearer ${FAKE_TOKEN}`);

    expect(response.body).toHaveProperty('message');
    expect(response.status).toBe(401);
  });

  test('POST /clients - Should not be able to register a client with an email being used by either a user or another client', async () => {
    const response = await request(app)
      .post('/clients')
      .send({ ...user200, ...userEditData })
      .set('Authorization', `Bearer ${userToken}`);

    const response2 = await request(app)
      .post('/clients')
      .send(clientData)
      .set('Authorization', `Bearer ${userToken}`);

    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toEqual(
      expect.stringContaining(userEditData.emails)
    );
    expect(response.status).toBe(409);
    expect(response2.body).toHaveProperty('message');
    expect(response2.body.message).toEqual(
      expect.stringContaining(clientData.emails)
    );
    expect(response2.status).toBe(409);
  });

  test('GET /clients/list - Should be able to list all clients registered by a user', async () => {
    const response = await request(app)
      .get('/clients/list')
      .set('Authorization', `Bearer ${userToken}`);

    expect(response.body).toHaveLength(2);
    expect(response.body[0].id).toEqual(clientId);
    expect(response.body[1].id).toEqual(client2Id);
    expect(response.status).toBe(200);
  });

  test('GET /clients/list - Should not be able to list clients without an authorization token', async () => {
    const response = await request(app).get('/clients/list');

    expect(response.body).toHaveProperty('message');
    expect(response.status).toBe(401);
  });

  test('GET /clients/list - Should not be able to list clients with an invalid authorization token', async () => {
    const response = await request(app)
      .get('/clients/list')
      .set('Authorization', `Bearer ${FAKE_TOKEN}`);

    expect(response.body).toHaveProperty('message');
    expect(response.status).toBe(401);
  });

  test('PATCH /clients/edit/:id - Should be able to edit a client', async () => {
    const edit = await request(app)
      .patch(`/clients/edit/${clientId}`)
      .send(editClientData)
      .set('Authorization', `Bearer ${userToken}`);

    const response = await request(app)
      .get('/clients/list')
      .set('Authorization', `Bearer ${userToken}`);

    // Whatever gets edited is put last in the array,
    // hence why I can assume my testing target will be
    // index 1 in response.body
    expect(edit.status).toBe(204);
    expect(response.body[1].emails[0]).toEqual(editClientData.emails);
  });

  test('PATCH /clients/edit/:id - Should be able register more than one email when editing a client', async () => {
    const edit = await request(app)
      .patch(`/clients/edit/${clientId}`)
      .send(twoEmailEditClientData)
      .set('Authorization', `Bearer ${userToken}`);

    const response = await request(app)
      .get('/clients/list')
      .set('Authorization', `Bearer ${userToken}`);

    expect(edit.status).toBe(204);
    expect(response.body[1].emails).toHaveLength(2);
    expect(response.body[1].emails[0]).toEqual(clientData.emails);
    expect(response.body[1].emails[1]).toEqual(editClientData.emails);
  });

  test('PATCH /clients/edit/:id - Should not be able to edit a client without an authorization token', async () => {
    const response = await request(app)
      .patch(`/clients/edit/${clientId}`)
      .send(twoEmailEditClientData);

    expect(response.body).toHaveProperty('message');
    expect(response.status).toBe(401);
  });

  test('PATCH /clients/edit/:id - Should not be able to edit a client with an invalid authorization token', async () => {
    const response = await request(app)
      .patch(`/clients/edit/${clientId}`)
      .send(twoEmailEditClientData)
      .set('Authorization', `Bearer ${FAKE_TOKEN}`);

    expect(response.body).toHaveProperty('message');
    expect(response.status).toBe(401);
  });

  test('PATCH /clients/edit/:id - Should not be able to force create/edit a client with an artificial uuid', async () => {
    const response = await request(app)
      .patch(`/clients/edit/${FAKE_UUID}`)
      .send(dummyClientData)
      .set('Authorization', `Bearer ${userToken}`);

    expect(response.body).toHaveProperty('message');
    expect(response.status).toBe(404);
  });

  test('PATCH /clients/edit/:id - Should not be able to register an already used email when editing a client', async () => {
    const response = await request(app)
      .patch(`/clients/edit/${client2Id}`)
      .send(editClientData)
      .set('Authorization', `Bearer ${userToken}`);

    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toEqual(
      expect.stringContaining(editClientData.emails)
    );
    expect(response.status).toBe(409);
  });

  test('DELETE /clients/delete/:id - Should be able to delete a client', async () => {
    const deleteUser = await request(app)
      .delete(`/clients/delete/${client2Id}`)
      .set('Authorization', `Bearer ${userToken}`);

    const response = await request(app)
      .get('/clients/list')
      .set('Authorization', `Bearer ${userToken}`);

    expect(deleteUser.status).toBe(204);
    expect(response.body).toHaveLength(1);
  });

  test('DELETE /clients/delete/:id - Should return 404 if given client was already deleted', async () => {
    const deleteUser = await request(app)
      .delete(`/clients/delete/${client2Id}`)
      .set('Authorization', `Bearer ${userToken}`);

    expect(deleteUser.body).toHaveProperty('message');
    expect(deleteUser.status).toBe(404);
  });

  test('DELETE /clients/delete/:id - Should not be able to delete a client without an authorization token', async () => {
    const deleteUser = await request(app).delete(
      `/clients/delete/${client2Id}`
    );

    expect(deleteUser.body).toHaveProperty('message');
    expect(deleteUser.status).toBe(401);
  });

  test('DELETE /clients/delete/:id - Should not be able to delete a client with an invalid authorization token', async () => {
    const deleteUser = await request(app)
      .delete(`/clients/delete/${client2Id}`)
      .set('Authorization', `Bearer ${FAKE_TOKEN}`);

    expect(deleteUser.body).toHaveProperty('message');
    expect(deleteUser.status).toBe(401);
  });
});
