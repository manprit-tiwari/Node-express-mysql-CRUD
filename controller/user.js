const User = require('../models/user');

const addUser = (req, res, next) => {
    res.render('add-user', { pageTitle: 'add-user' });
}
const addNewUser = (req, res, next) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let mobile = req.body.mobile;
    let image = req.body.image;
    const user = new User(firstName,lastName,mobile,image);
    user.save().then((result) => {
        // console.log(raws);
        // console.log(fieldData)
        console.log(result);
        res.redirect('/');
    }).catch(err => {
        console.log(err);
    })
}

const getAllUsers = (req, res, next) => {
    User.getAllUsers().then(([rows, fieldData]) => {
        console.log(rows);
        res.render('index', { pageTitle: 'Home', users: rows });
    }).catch(err => {
        console.log(err);
    })
    
}

const getSingleUser = (req, res, next) => {
    let sr = req.params.sr;
    let firstName = req.params.firstName;
    User.getSingleUser(sr, firstName).then(([rows,fieldData]) => {
        res.render('singleUser', { pageTitle: 'User Detais', users: rows });
    }).catch((err) => {
        console.log(err);
    })
}

const deleteUser = (req, res, next) => {
    let sr = req.params.sr;
    let name = req.params.firstName;
    User.deleteUser(sr, name).then((result) => {
        console.log(result);
        res.redirect('/');
    }).catch(err => {
        console.log(err);
    })
}


module.exports = {
    addUser: addUser,
    addNewUser: addNewUser,
    getAllUsers: getAllUsers,
    deleteUser: deleteUser,
    getSingleUser: getSingleUser
}