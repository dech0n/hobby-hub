const {
  db: { username, password, database, host },
} = require('./index');

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  production: {
    use_env_variable: 'postgres://uackesgeqxtowm:70b9b3e34beac1e369c85dde1b871ddaa2753a8ae0cd654d73c8a1052eccfeda@ec2-52-0-114-209.compute-1.amazonaws.com:5432/ddk24b5toco12i',
    dialect: 'postgres',
    seederStorage: 'sequelize',
  }
};
