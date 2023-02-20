const { Sequelize, Model, DataTypes, where } = require("sequelize");
const sequelize = require("./")
const Book = sequelize.define("Books",{
  idBooks : { type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement:true,
    },
  name: { type: DataTypes.STRING(45),
    allowNull: false,
    unique:true,
  },
  price:{ type: DataTypes.STRING(45),
    allowNull: false,
    },
  description: { type: DataTypes.STRING(45),
    allowNull: false,
    },
  duration: { type: DataTypes.STRING(45),
    allowNull: false,
    },
  language:{ type: DataTypes.STRING,
    allowNull: false,
    },
  thumbnail: { type: DataTypes.STRING(45),
    allowNull: false,
    },
  gains:{ type: DataTypes.STRING(450),
    allowNull: false,
    },
  video: { type: DataTypes.STRING,
    allowNull: false,
    },
  instructor:  { type: DataTypes.INTEGER,
    allowNull: false,
    
    },
 });
 module.exports={
  findAll : async ()=> {
    try {
    const users = await Book.findAll()
    return users;
    
  }
    catch(err) {
      console.log(err)
    }
  } ,
  findOne : async (id)=> {
    try {
      const user = await Book.findOne({where:{idusers:id}})
      return user;
      
    }
      catch(err) {
        console.log(err)
      }
  },
  addBook : async (book) => {
    try {
      await Book.create(book)
      return "created"
    }
    catch (e) {
      console.log(e);
      return e
    }
  }

 }