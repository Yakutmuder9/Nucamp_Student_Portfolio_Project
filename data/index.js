const books = require("./books.json");
const courseList = require("./courseList.json");
const event = require("./event.json");
const instractors = require("./instractors.json");
const student = require("./student.json");

module.exports = () => ({
  books: books,
  courseList: courseList,
  event: event,
  instractors: instractors,
  student: student,
});
