const User = require('../models/user');
const bcrypt = require('bcryptjs');

const register = async (req, res, next) => {

    const { name, username, email, password } = req.body;
    console.log(req.body);

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    console.log(hash);

   const user=  await User.create({
        name,
        username,
        email,
        password: hash,
    }).then((e) => {

        res.status(200).json({ message: "Succsess" });
        console.log(e);
    }).catch((err) => {
        res.status(400).json({
            err,
            message: 'Not Registerd cred'
        })
    })

}
module.exports = register;