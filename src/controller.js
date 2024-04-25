const express = require('express');
const router = express.Router();
const UserService = require('./userService');

const userService = new UserService();

router.get('/users', (req, res) => {
  const users = userService.getAllUsers();
  res.json(users);
});

router.post('/users', (req, res) => {
  const { nome, email } = req.body;
  const newUser = userService.addUser(nome, email);
  res.status(201).json(newUser);
});

module.exports = router;
