const { Sequelize, Model, DataTypes, where, or } = require("sequelize");
const sequelize = require("./")
const bcrypt = require('bcryptjs');
const { isCSSRequest } = require("vite");
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
    speciality: { type: DataTypes.TEXT(45),
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
    const mail = await User.findOne({where:{email:user.email}})
    const username = await User.findOne({where:{username:user.username}})
  
    if (!mail && !username) {
    const {password}=user ;
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    user.password=hash ; 
    try {
      User.create(user)
      return "user created"
    }
    catch (err) {
      return err 
    }}
    else if (username && mail){
      return " user exits ! please check your credentials"

    }
    else if (!mail && username) {
      return "please choose another username"
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
  },
  UpdateUser : async (user,id)=>{
    try {
  
      const Mainuser = await User.findOne({where:{idusers:id}})
      if (bcrypt.compareSync(user.password, Mainuser.password) ) {
        user.password = Mainuser.password
        }
      else {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(user.password, salt);
        user.password=hash ; }
      await User.update(user,{where:{idusers : id}})
      const newuser = await User.findOne({where:{idusers:id}})
  return newuser;
  }
    catch(e) {
      console.log(e)
    }
  },
  deleteUser : async (id ) => {
    try {
      await User.destroy({where:{idusers:id}})
    }
    catch (e) {
      console.log(e)
    }
  }

 }