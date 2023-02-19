const { Sequelize, Model, DataTypes, where } = require("sequelize");
const sequelize = require("./")

const Learn = sequelize.define("learn",{
  iduser: { type: DataTypes.INTEGER,
    allowNull: false

    },
    idcourse: { type: DataTypes.INTEGER,
        allowNull: false
        }

    }

)

module.exports={
    addItem: async (item)=> {
        try {
        const items = await Learn.create(item,{ fields: ['iduser','idcourse'] })
        return items;
        
      }
        catch(err) {
          console.log(err)
        }
      },
      deleteItem: async (iduser)=> {
        try {
         const items= await Learn.destroy({where:{iduser:iduser}},{ fields: ['iduser','idcourse'] })
        return items;
        
      }
        catch(err) {
          console.log(err)
        }
      },
      getItem: async () => {
        try {
          const items = await Learn.findAll({
            attributes: ['iduser', 'idcourse']
          });
          return items;
        } catch (err) {
          console.log(err);
        }
      }
}


