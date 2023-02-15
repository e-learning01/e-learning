const db = require("../../database/model/index.js");
const User = db.auth;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  //  verifying username
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Username is already taken!"
      });
      return;
    }

    // verifying email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Email is already in use!"
        });
        return;
      }

      next();
    });
  });
};

const verifyExistence = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail};

module.exports = verifyExistence;

