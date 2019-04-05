const Joi = require('joi');
const debug = require('debug')('server:db');
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secrets = require('config').get('secrets');
const userDB = require('../models/users');

const schema = Joi.object().keys({
  username: Joi.string().max(255).required(),
  password: Joi.string().max(255).required()
});

const generateToken = ({ id, username }) =>
  jwt.sign(
    { subject: id, username },
    process.env.JWT_SECRET || secrets.jwt,
    { expiresIn: '1d' }
  );

router.post('/register', async ({ body: newUser }, res) => {
  const { error } = Joi.validate(newUser, schema);
  if (error)
    return res.status(400).json({
      message: error.details[0].message
    });

  try {
    newUser.password = bcrypt.hashSync(newUser.password, 10);
    const [id] = await userDB.add(newUser);
    const [{password, ...user}] = await userDB.findById(id);
    res.status(201).json(user);
  } catch (error) {
    debug(error);
    res.status(500).json({
      message: 'Something went wrong; user could not be registered.'
    });
  }
});

router.post('/login', async ({ body: creds }, res) => {
  const { error } = Joi.validate(creds, schema);
  if (error) return res.status(400).json({
    message: error.details[0].message
  });

  const { username, password } = creds;

  try {
    const [user] = await userDB.findBy({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({
        message: `Welcome, ${username}!`,
        token
      });
    } else {
      res.status(401).json({ message: 'Invalid Credentials' });
    }
  } catch (error) {
    debug(error);
    res.status(500).json({
      message: 'Something went wrong; user could not be logged in.'
    });
  }
});

module.exports = router;
