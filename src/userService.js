const UserDTO = require('./userDTO');
const UserRepository = require('./userRepository');

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  getAllUsers() {
    // Para simplificar, retornaremos os usuários diretamente do repositório
    return this.userRepository.getAllUsers();
  }

  addUser(nome, email) {
    const id = Math.floor(Math.random() * 1000); // Gera um ID aleatório
    const newUser = new UserDTO(id, nome, email);
    this.userRepository.addUser(newUser);
    return newUser;
  }
}

module.exports = UserService;
