const User = require('../models/user');
const bcrypt = require('bcryptjs');

const register = async (req, res, next) => {

    const { name, username, email, password } = req.body;

console.log(req.body)

    await bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          console.log(err);
        }
        console.log(err)
        console.log(hash);
        let user = new User({
            name,
            username,
            email,
            password: hash
        })
        try {
            const savedUser = await user.save();
            res.status(200).json({
                message: 'User added successfully',
                user: savedUser
            })
        } catch (error) {
            res.status(200).json({
                message: 'An error occured'
            })
        }
    }
    )
}
module.exports = register;

