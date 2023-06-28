const { User } = require('../models');

const create = async (data) => {
    if (await User.isEmailTaken(body.email)) throw new ApiError(httpStatus.OK, "Email already taken");
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = await User.create({ ...body, password: hashedPassword });
    return user;
}

const findAll = async () => {
    const users = await User.find();
    if (!users || users.length === 0) return [];
    return users;
}

const findById = async (pk) => {
    const user = await User.findById(pk);
    if (!user) return null;
    return user;
}

module.exports = {
    create,
    findAll,
    findById,
    // findByUsername,
    // findByEmail,
    // update,
    // deleteById,
}