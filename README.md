# <b> <i>ClientCAT</i> </b>

An application that allows you to register your clients, keeping track of them with no more use for your notebooks, Excel sheets or Word documents. At least until you register them.

## <b><i>Setting up</i></b>

> ## <b> <i>Running the application locally</i> </b>

Ensure there are no other processes running (close other localhost applications).

### <b> <i>1. Starting up backend</i> </b>

**1.1** Enter the backend folder <br>
**1.2** Open bash or any other command language interpreter <br>
**1.3** Run `yarn install` <br>
**1.4** Fill the information in your `.env`, following the format given in `.env.example` <br>
**1.5** Make sure you have a database in your PostgreSQL with the same name as `DB` in your `.env` <br>
**1.6** In your `.env` file, set your `DB_HOST` as `"localhost"` <br>
**1.7** Run `yarn migrate` <br>
**1.8** Run `yarn dev` <br>

### <b> <i>2. Starting up frontend </i> </b>

**2.0** Follow these steps with backend server running <br>
**2.1** Enter the frontend folder <br>
**2.2** Open bash or any other command language interpreter <br>
**2.3** Run `yarn install` <br>
**2.4** Run `yarn start` <br>

### <b> <i>Extra step: 3. Running tests</i> </b>

**3.1** Create another PostgreSQL database <br>
**3.2** At `backend/.env`, set your `DB_TEST` to your new database <br>
**3.3** Run `yarn test` <br>

**_NOTE: When all tests are done, there is a command on `afterAll()` that will clear all of the data, so there should be no problems with data stacking up on that database_**

> ## <b> <i>Running the application on docker</i> </b>

### 1. <b> <i> In your backend/.env, set your `DB_HOST` value from `"localhost"` to `"db"` </i> </b>

Example:

```
backend\.env

DB_HOST=db
DB_USER=   # insert your postgres user
DB_PWD=  # insert your postgres password
DB=  # insert your postgres database
SECRET_KEY=  # insert a secret key

DB_TEST=  # insert a postgres database for testing
```

### <b> <i> 2. Go to your root folder (where docker-compose.yml, backend and frontend are)

### <b> <i> 3. Open base or any other command language interpreter

### <b> <i> 4. Run `docker-compose up`

### <b> <i> 5. After everything is done:

> ### `localhost:3000` > Backend port; can be tested on insomnia
>
> ### `localhost:3001` > Frontend port; can be opened on your browser
