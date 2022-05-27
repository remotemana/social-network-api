const req = require('express/lib/request');
const res = require('express/lib/response');
const {
    User
} = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    // Get a single User
    getSingleUser(req, res) {
        User.findOne({
                _id: req.params.userId
            })
            .then((user) =>
                !user ?
                res.status(404).json({
                    message: 'No User found with that id'
                }) :
                res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Create a user 
    createUser(req, res) {
        User.create(req.body)
            .then((userData) => {
                res.json(userData);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    updateUser(req, res) {
        User.findOneAndUpdate({
                _id: req.params.userId
            }, {
                $set: req.body
            }, {
                runValidators: true,
                new: true
            })
            .then((user) =>
                !user ?
                res.status(404).json({
                    message: 'No User with this id!'
                }) :
                res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    deleteUser(req, res){
        User.findOneAndRemove({ _id: req.params.userId})
        .then((user)=>
        !user
        ? res.status(404).json({message: "No user with this id!"})
        : res.json(user)
        )
        .catch ((err)=> res.status(500).json(err));
      },
  
};