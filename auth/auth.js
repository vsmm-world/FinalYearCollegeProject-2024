const { default: mongoose } = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const register = async (req, res, next) => {

    const { name, username, email, Password } = req.body;
    const chek = await User.findOne({ email: email });
    // console.log(chek)
    if (chek) {
        return res.status(400).json({
            message: 'Email already exists',
        });
    }

    const hash = await bcrypt.hash(Password, 10);


    let user = new User({
        name,
        username,
        email,
        password: hash,
    });
    const savedUser = await user.save();
    res.status(200).json({
        message: 'User added successfully',
        user: savedUser,
    });

};

module.exports = register;
