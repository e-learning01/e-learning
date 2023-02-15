const {User} = require("../../database/model/index.js")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Set up routes
const signUp = async (req, res) => {
    const {firstname, lastname, username, email, password, address, img, age, role} = req.body;
    // I am hashing the password here
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      // Creating a new user in the database
      const user = await User.create({
        firstname : firstname, 
        lastname : lastname, 
        username : username, 
        email :  email, 
        password : hashedPassword, 
        address : address, 
        img : img, 
        age : age, 
        role : role
    });
      res.status(201).json( user, { message: 'Account has been successfully created!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'There was an error creating account!' });
    }
  };
  
const logIn = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Finding the user in the database
      const user = await User.findOne({ where: { username } });
  
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
  
      // Verifying the password
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
  
      // I am generating a JWT token here
      const token = jwt.sign({ email: user.email }, 'your-secret-key');
  
      res.status(200).json({ message: 'Authentication successful', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error authenticating user' });
    }
  };

  module.exports = { signUp, logIn }