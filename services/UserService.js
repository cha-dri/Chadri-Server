import User from '../models/user.js';

async function createUser(nickname) {
  const newUser = await User.create({
    nickname: nickname,
  });
  return newUser;
}

async function getUser(id) {
  const findUser = await User.findById(id);
  return findUser;
}

export default {
  createUser,
  getUser
}