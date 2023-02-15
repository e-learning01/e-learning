const express = require("express");
const app = express()
const port = 3000;
const cors = require("cors");

const authRoute = require('./routes/auth.route.js');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/auth', authRoute);

app.get('/protected', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'This is a protected route!' });
});

app.listen(port, () => {
console.log(`Server listening on port ${port}`);
})

module.exports = app;





