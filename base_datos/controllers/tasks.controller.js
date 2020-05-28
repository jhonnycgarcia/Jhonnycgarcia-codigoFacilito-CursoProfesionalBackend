const Task = require('../models').Task;

module.exports = {
    create: function(req, res) {
        Task.create({ description: req.body.description })
            .then(result => {
                res.json(result);
            }).catch(err => {
                console.log(err);
                res.json(err);
            })
    },
    index: function(req, res) {
        Task.findAll().then((tasks) => {
            res.json(tasks);
        }).catch(err => {
            console.log(err);
            res.json(err);
        })
    },
    new: function(req, res) {
        res.render('tasks/new')
    },
    Anew: function(req, res) {},
};