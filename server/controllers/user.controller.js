const {User} = require("../../database/model/index.js")

  const removeUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).send('User not found');
      }
      await user.destroy();
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  };

  const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { firstname, lastname, username, email, password, address, img, age } = req.body;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).send('User not found');
      }
      const updatedUser = await user.update({ firstname, lastname, username, email, password, address, img, age });
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(400).send('Server Error');
    }
  };


  
  module.exports = {removeUser, updateUser}