const express = require('express');
const controller = require('./controller');
const PORT = process.env.PORT ||3000;

const app = express();

app.use(express.json());
app.use(controller);

app.get('/', (request,response) =>{
    response.send('Hello world, try route /users')
})

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
