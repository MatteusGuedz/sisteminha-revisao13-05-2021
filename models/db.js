const Sequelize = require('sequelize');

const sequelize = new Sequelize('guedz', 'root', '32382020', {
    host: 'localhost',
    dialect: 'mysql'
  });

//   sequelize.authenticate()
//   .then(()=>{console.log("conexão realizada com sucesso")})
//   .catch((err)=>{console.log("conexão nao realizada \n ERROR:" + err)})

  module.exports = sequelize;