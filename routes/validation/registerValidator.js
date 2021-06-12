const validatorFactory = require('./validatorFactory');

const registerValidator = validatorFactory({
  email: { type: 'email' },
  username: { type: 'string' },
  password: { type: 'string', empty: false }
});

module.exports = registerValidator;