const Task = require('../models').Task;

module.exports = {
    create: function(req, res) {
        Task.create({ description: req.body.description, userId: req.user.id })
            .then(result => {
                res.json(result);
            }).catch(err => {
                console.log(err);
                res.json(err);
            })
    },
    destroy: function(req, res) {
        Task.destroy({ where: { id: req.params.id } })
            .then(result => {
                res.redirect('/tasks');
            }).catch(err => {
                console.log(err);
                res.json(err);
            });
    },
    edit: function(req, res) {
        Task.findByPk(req.params.id).then(task => {
            res.render('tasks/edit', { task });
        }).catch(err => {
            console.log(err);
            res.json(err);
        });
    },
    index: function(req, res) {
        Task.findAll().then((tasks) => {
            res.render('tasks/index', { tasks });
        }).catch(err => {
            console.log(err);
            res.json(err);
        });
    },
    new: function(req, res) {
        res.render('tasks/new')
    },
    show: function(req, res) {
        Task.findByPk(req.params.id).then(task => {
            res.render('tasks/show', { task });
        }).catch(err => {
            console.log(err);
            res.json(err);
        });
    },
    update: function(req, res) {
        Task.update({ description: req.body.description }, { where: { id: req.params.id } }).then(result => {
            res.redirect('/tasks/' + req.params.id);
        }).catch(err => {
            console.log(err);
            res.json(err);
        });
    }
};