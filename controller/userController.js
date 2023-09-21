import User from '../Model/userSchema.js';

export const addUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(404).json("User already exists");
    }

    let user = new User({
      name: req.body.name,
      email: req.body.email,
      picture: req.body.picture,
    });

    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ email: id });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const removeUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.deleteOne({ email: id });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
