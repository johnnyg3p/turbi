// taskRoutes.js

var express = require('express');
var taskRoutes = express.Router();

// Require Item model in our routes module
var Task = require('../models/Task');

// Defined store route
taskRoutes.route('/add').post(function (req, res) {
  var task = new Task(req.body);
   task.save()
    .then(item => {
    res.status(200).json({'task': 'Task added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
taskRoutes.route('/').get(function (req, res) {
   Task.find(function (err, tasks){
    if(err){
      console.log(err);
    }
    else {
      res.json(tasks);
    }
  });
});

// Defined edit route
taskRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Task.findById(id, function (err, task){
      res.json(task);
  });
});

//  Defined update route
taskRoutes.route('/update/:id').post(function (req, res) {
   Task.findById(req.params.id, function(err, task) {
    if (!task)
      return next(new Error('Could not load Document'));
    else {
      task.name = req.body.name;
      task.description = req.body.description;

      task.save().then(task => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
taskRoutes.route('/delete/:id').get(function (req, res) {
   Task.findByIdAndRemove({_id: req.params.id}, function(err, task){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = taskRoutes;
