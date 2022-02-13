const User = require("../models/User");
const columns = require('../columns/users');

module.exports.get_users = async (req, res) => {
    const users = await User.find({}, { _id: false, __v: false });

    res.json({
        columns,
        data: users
    });
}

module.exports.submit_users = async (req, res) => {
    const users = req.body;

    await User.deleteMany({});
    
    try {
        users.forEach( async (user) => {
            await User.create(user)
        });

        res.status(201).send();
    }
    catch (err) {
        res.status(500).send();
    }
}