const { Sequelize, Model, DataTypes, where } = require("sequelize");
const sequelize = require("./")
const bcrypt = require('bcryptjs');
const User = sequelize.define("users",{
 idusers: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING(45), allowNull: false },
  lastname: { type: DataTypes.STRING(45), allowNull: false },
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  speciality: { type: DataTypes.STRING(45), allowNull: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING(45), allowNull: false },
  img: { type: DataTypes.STRING(450), allowNull: false },
  age: { type: DataTypes.INTEGER, allowNull: false },
  role: { type: DataTypes.INTEGER, allowNull: false },
});
//sequelize.sync({ force: true });
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

 