const User = require('../models/user');
const bcrypt = require('bcryptjs');

const register = async (req, res, next) => {

    const { name, username, email, password } = req.body;

    bcrypt.hash(password, 10).then(async (hash) => {
        await User.create({
            name,
            username,
            email,
            password: hash,
        }).then((e) => {
            res.status(200).redirect('/login');
        }).catch((e) => {
            console.log(e);
            res.status(400).render("error");
        })
    })
}
module.exports = register;