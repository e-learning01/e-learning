const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('e-learning', 'root', 'KianaKaslana', {  
    host: 'localhost',
    dialect: 'mysql',
    define: {
     timestamps: false
 }});
   sequelize.authenticate().then(res=>
        console.log('Connection has been established successfully.')).catch
   ((error) => {
        console.error('Unable to connect to the database:', error);
      })
      module.exports=sequelize;