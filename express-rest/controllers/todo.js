const Model = require('../models/todo');

// exports.list = (req, res) => {
//   Model.find().then((todos) => {
//     res.json(todos);
//   });
// };

exports.list = async (req, res) => {
  try {
    const todos = await Model.find();
    res.json(todos);
  } catch(err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const todo = await Model.findByIdAndDelete(req.params.id);

    if (!todo) {
      req.notFoundReason = 'Todo not found';
      return next();
    }

    res.json(todo);
  } catch(err) {
    next(err);
  }
};

exports.create = async (req, res) => {
  try {
    const todo = await Model.create(req.body);
    res.statusCode = 201;
    res.json(todo);
  } catch(err) {
    next(err);
  }
};
