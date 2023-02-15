const jwt = require('jsonwebtoken');

// I am using middleware to authenticate requests
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
  
    try {
      const decodedToken = jwt.verify(token, 'your-secret-key');
      req.userData = { email: decodedToken.email };
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Authentication failed' });
    }
  };

module.exports = {authMiddleware}; 
  

  