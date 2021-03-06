const Task = require('../models').Task;
const User = require('../models').User;

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
            res.render('tasks/index', { tasks: req.user.tasks });
        }).catch(err => {
            console.log(err);
            res.json(err);
        });
    },
    new: function(req, res) {
        res.render('tasks/new')
    },
    show: function(req, res) {
        Task.findByPk(req.params.id, {
            include: [{ model: User, as: 'user' }, 'categories'] // añadir carga de relacion
        }).then(task => {
            res.render('tasks/show', { task });
        }).catch(err => {
            console.log(err);
            res.json(err);
        });
    },
    update: function(req, res) {
        // Task.addCategories([1,5])
        let task = Task.findByPk(req.params.id).then(task => {
            task.description = req.body.description;
            task.save().then(() => {
                let categoryIds = req.body.categories.split(',');

                task.addCategories(categoryIds).then(() => {
                    res.redirect(`/tasks/${task.id}`);
                });
            });
        });
        // Task.update({ description: req.body.description }, { where: { id: req.params.id } }).then(result => {
        //     res.redirect('/tasks/' + req.params.id);
        // }).catch(err => {
        //     console.log(err);
        //     res.json(err);
        // });
    }
};