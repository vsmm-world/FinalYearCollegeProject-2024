const User = require('../models/user');
const bcrypt = require('bcryptjs');

const register = async (req, res, next) => {
    try {
        const { name, username, email, Password } = req.body;

        console.log(req.body);

        // Use bcrypt.hash with promises
        const hash = await bcrypt.hash(Password, 10);

        console.log(hash);

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
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error occurred',
        });
    }
};

module.exports = register;
