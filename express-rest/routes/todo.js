const express = require('express');
const todoCtrl = require('../controllers/todo');

const router = express.Router();

router.get('/', todoCtrl.list);

router.delete('/:id', todoCtrl.delete);

router.post('/',
  express.json(),
  todoCtrl.create,
);

module.exports = router;
