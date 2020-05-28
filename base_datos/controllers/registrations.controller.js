const User = require('../models').User;

module.exports = {
    create: function(req, res) {
        let data = {
            email: req.body.email,
            password: req.body.password
        }

        User.create(data).then(result => {
                res.json(result);
            })
            .catch(error => {
                console.log(error);
                res.json(error);
            });
    },
    new: function(req, res) {
        res.render('registrations/new');
    },
    a: function(req, res) {},
};