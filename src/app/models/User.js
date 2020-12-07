module.exports = (Sequelize, Datatypes) => {
  const User = Sequelize.define('User', {
    name: Datatypes.STRING,
    email: Datatypes.STRING,
    password_hash: Datatypes.STRING
  })

  return User
}