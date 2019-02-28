/*
const todos = [
  {
    title: "Introduire Express",
    completed: true,
    id: 1
  },
  {
    title: "Aller prendre le train",
    completed: false,
    id: 2
  }
];


exports.find = () => {
  // return new Promise((resolve) => {
  //   resolve(todos);
  // });
  return Promise.resolve(todos);
}


exports.findByIdAndDelete = (id) => {
  const todo = todos.find((t) => t.id === Number(id));

  if (!todo) {
    return Promise.resolve(null);
  }

  const i = todos.indexOf(todo);
  todos.splice(i, 1);

  return Promise.resolve(todo);
}

exports.create = (todo) => {
  const maxId = todos.reduce((acc, t) => t.id > acc ? t.id : acc, 0);
  todo.id = maxId + 1;

  todos.push(todo);

  return Promise.resolve(todo);
}
*/

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'title is required'],
  },
  completed: {
    type: Boolean,
  }
}, {versionKey: false});

// Hooks / Middlewares / Trigger
// schema.pre('save', () => {

// });

module.exports = mongoose.model('Todo', schema);
