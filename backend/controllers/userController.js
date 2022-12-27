const asyncHandler = require("express-async-handler");
const { db } = require("../models");
const User = db.user;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Post /api/user/
// register user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //   check if name, email or password are empty
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please Fill all fields" });
  }

  // check if user already exists
  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    return res.status(400).json({ msg: "User already exists" });
  }

  // create a new user
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  if (user) {
    return res
      .status(201)
      .json({ user: { name, email, token: generateToken(user.id) } });
  }
});

// login for User
// Post /api/user/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // check email and password is empty or not
  if (!email || !password) {
    return res.status(400).json({ msg: "Fill all fields" });
  }

  const user = await User.findOne({ where: { email } });
  // compare password using bcrypt.compare
  if (user && (await bcrypt.compare(password, user.password))) {
    return res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id),
      },
    });
  }

  res.status(400);
  throw new Error("Invalid Credentials");
});

const users=asyncHandler(async(req, res)=>{
    const users= await User.findAll({ });
    return res.status(200).json({users,id:req.userId})
})

// generate Token
const generateToken = (id) => {
   return jwt.sign({ id }, process.env.SECRET_KEY, {
     expiresIn: "30d",
   });
};

module.exports = {
  registerUser,
  loginUser,
  users
};
