import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin USer',
    email: 'admin@trattoriadinando.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john_doe@trattoriadinando.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mari Doe',
    email: 'mari_doe@trattoriadinando.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
