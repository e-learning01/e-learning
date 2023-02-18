const { findAll, findOne, createOne } = require("../model/CourseSchema");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  HandleFindCourses: async (req, res) => {
    try {
      const books = await findAll();
      res.send(books);
    } catch (err) {
      res.send([]);
    }
  },
  HandleOnebook: async (req, res) => {
    try {
      const book = await findOne(req.params.id);
      res.send(book);
    } catch (err) {
      res.send([]);
    }
  },
  addOneBook: async (req, res) => {
    try {
      const response = await createOne(req.body);
      res.send(response);
    } catch (err) {
      res.send(err);
    }
  },
};
