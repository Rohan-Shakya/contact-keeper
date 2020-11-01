# Contact Keeper

MERN App to track of your contacts

## Features

- RESTful API
- Register User
- Login User
- Create private contacts

```
-------------------------------------------
[Method]    [Route]               [Description]               [Access]

GET         /api/auth             Get Logged in user          Private
POST        /api/auth             Auth user & get token       Public
POST        /api/users            Register a user             Public
GET         /api/contacts         Get all users contacts      Private
POST        /api/contacts         Add new contact             Private
PUT         /api/contacts/:id     Update contact              Private
DELETE      /api/contacts/:id     Delete contact              Private

-------------------------------------------

```

## Technology Used:

- Frontend

  - React
  - Context API
  - React-router-dom
  - Axios
  - React-Transition-Group

- Backend
  - Node.js
  - Express.js
  - MongoDB
  - JSON Web Token
  - Express-Validator
  - Bcryptjs

Check `package.json` file for more information.
