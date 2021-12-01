# TDD Testing Backend  
#### Plant webshop :potted_plant: :cherry_blossom:
### Installation:
- npm install
- create .env file 
```
PORT=YourFavoritePort
NODE_ENV= Here you can write whatever diferent to 'test'
```
 
### Run database from you principal directory

```
node database/setup.js && node database/seed.js

```

### Description

Backend code with Express, Jest och SuperTest. [Tips](https://dev.to/franciscomendes10866/testing-express-api-with-jest-and-supertest-3gf) 

This RESTful API have the following endpoints.

### Product Endpoint

| Metod	| Resurs |
| -------- | -------- | 
| GET |	/api/products/ |
| GET | /api/products/:id |
| POST | /api/products/ |
| PUT |	/api/products/:id |
| DELETE | /api/products/:id |

### User Endpoint

| Metod | Resurs |
| -------- | -------- | 
| GET |	/api/users/ |
| GET |	/api/users/:id |
| POST | /api/users/ |
| DELETE | /api/users/:id |


### Cart Endpoint

| Metod | Resurs |
| -------- | -------- | 
| GET |	/api/carts/:userLogin/ |
| POST | /api/carts/:userLogin/ |
| PUT | /api/carts/:userLogin/:itemId |
| DELETE | /api/carts/:userLogin/:itemId |



