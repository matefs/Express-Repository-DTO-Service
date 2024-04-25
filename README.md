###     Express-Repository-DTO-Service
The "Express-Repository-DTO-Service" project is a Node.js application built using the Express.js framework and follows the Repository-DTO-Service pattern. This project aims to provide a structured and scalable architecture for developing web applications, particularly those requiring database interactions and business logic operations.

![image](https://github.com/matefs/Express-Repository-DTO-Service/assets/30128774/5c4de31d-092a-4267-b476-879c41d4440a)

## Instalation steps: 
1. Download the project `git clone https://github.com/matefs/Express-Repository-DTO-Service.git`
2. run `npm install`
3. run `npm start`
4. Do a curl post request at `http://localhost:3000/users`:
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"nome": "new user", "email": "new@email.com"}' \
  http://localhost:3000/users
```
5. Using your browser, acess `http://localhost:3000/users` to see registered users.
