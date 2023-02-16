const { Sequelize, Model, DataTypes, where } = require("sequelize");
const sequelize = require("./")
const bcrypt = require('bcryptjs');
const User = sequelize.define("users",{
  idusers: { type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement:true,
    },
  name: { type: DataTypes.TEXT(45),
    allowNull: false,
    unique:true,
  },
  lastname:{ type: DataTypes.TEXT(45),
    allowNull: false,
    },
  username: { type: DataTypes.TEXT(45),
    allowNull: false,
    },
  email: { type: DataTypes.TEXT(45),
    allowNull: false,
    },
  password:{ type: DataTypes.TEXT,
    allowNull: false,
    },
  address: { type: DataTypes.TEXT(45),
    allowNull: false,
    },
  img:{ type: DataTypes.TEXT(450),
    allowNull: false,
    },
  age: { type: DataTypes.INTEGER,
    allowNull: false,
    },
  role:  { type: DataTypes.INTEGER,
    allowNull: false,
    },
 });
 module.exports={
  findAll : async ()=> {
    try {
    const users = await User.findAll()
    return users;
    
  }
    catch(err) {
      console.log(err)
    }
  } ,
  findOne : async (id)=> {
    try {
      const user = await User.findOne({where:{idusers:id}})
      return user;
      
    }
      catch(err) {
        console.log(err)
      }
  },
  createOne : async (user) => {
    const {password}=user ;
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    user.password=hash ; 
    try {
      User.create(user)
    }
    catch (err) {
      return err 
    }
  },
  signIn : async (user) => {
    try {
    const currentUser = await User.findOne({where : {
      email:user.email 
    }}
    )
    if (!currentUser) { return "please register or check your email" }
      else {
     
    const info = currentUser["dataValues"]
      console.log(bcrypt.compareSync(user.password, info.password))
      if (bcrypt.compareSync(user.password, info.password) ) {
        return info   
        }
      else {return "check your password"}
    }
    

  }
  catch(err) {
    return err
  }
  }

 }