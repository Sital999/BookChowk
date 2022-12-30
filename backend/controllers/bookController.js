const asyncHandler = require("express-async-Handler");
const { db } = require("../models");
const Book = db.book;
const Notification = db.notification;
const Semester = db.semester;
const Department = db.department;
const User = db.user;
const Op =db.Op
const Sequelize = db.sequelize;


// get Book
// GET /api/book

const getBook = asyncHandler(async (req, res) => {
  const book = await Book.findAll({order:[['name','ASC']]});

  return res.status(200).json({ book });
});

// post Book
// POST /api/book

const postBook = asyncHandler(async (req, res) => {
  const {
    name,
    genre,
    rent_price,
    selling_price,
    description,
    semester,
    department,
  } = req.body;

  // find semester and department of respective id
  const sem = await Semester.findOne({ where: { name: semester } });
  const dept = await Department.findOne({ where: { name: department } });
  
  // create book object
  const book = await Book.create({
    name,
    genre,
    rent_price,
    selling_price,
    description,
    userID: req.userId,
    semesterID: sem==null?null:sem.id,
    departmentID: dept==null?null:dept.id 
  });

  return res.status(201).json({ book });
});

// update Book
// PUT /api/book/bookId

const updateBook = asyncHandler(async (req, res) => {
  const { bookId } = req.params;
  const book = await Book.findOne({ where: { id: bookId } });
  if (!book) {
    res.status(400);
    throw new Error(`No Book found with id: ${bookId}`);
  }
  // updating Book of resp. id with data provided
  book.set(req.body);
  await book.save();
  res.status(200).json({ book });
});

// delete Book
// DELETE /api/book/bookId

const deleteBook = asyncHandler(async (req, res) => {
  const { bookId } = req.params;
  const book = await Book.findOne({ where: { id: bookId } });
  if (!book) {
    res.status(400);
    throw new Error(`No Book found with id: ${bookId}`);
  }
  // updating Book of resp. id with data provided
  await book.destroy();
  res.status(200).json({ bookId });
});

// rent book
// PUT /api/book/rent/bookId

const rentBook = asyncHandler(async (req, res) => {
  const { bookId } = req.params;
  const book = await Book.findOne({ where: { id: bookId } });

  // user who wants to rent a book
  const user = await User.findOne({ where: { id: req.userId } });

  // if book not found
  if (!book) {
    res.status(400);
    throw new Error(`No Book found with id: ${bookId}`);
  }

  // check if book is already sold or not
  if (!book.isSell) {
    // update on book
    book.set({
      isRent: !book.isRent,
    });
    await book.save();
  } else {
    return res.status(200).json({ msg: "Book already sold" });
  }

  // create notification for the user buying
  if (book.isRent) {
    const notification = await Notification.create({
      rent: true,
      userID: book.userID,
      renter: user.name,
    });
    return res.status(200).json({ book, notification });
  } else {
    const notification = await Notification.create({
      return: true,
      userID: book.userID,
      renter: user.name,
    });
    return res.status(200).json({ book, notification });
  }
});

// sell book
// PUT /api/book/sell/bookId

const sellBook = asyncHandler(async (req, res) => {
  const { bookId } = req.params;
  const book = await Book.findOne({ where: { id: bookId } });

  // user who wants to rent a book
  const user = await User.findOne({ where: { id: req.userId } });

  // if book not found
  if (!book) {
    res.status(400);
    throw new Error(`No Book found with id: ${bookId}`);
  }

  // check if book is already on rent or not
  if (!book.isRent) {
    // update on book
    book.set({
      isSell: true,
    });
    await book.save();
  } else {
    return res.status(200).json({ msg: "Book already on rent" });
  }
  // create notification for the user buying

  const notification = await Notification.create({
    buy: true,
    userID: book.userID,
    buyer: user.name,
  });
  return res.status(200).json({ book, notification });
});


// search books of matching name for given name
const searchBook=asyncHandler(async(req, res)=>{
  const {name}=req.query
  const books = await Book.findAll({
    where:{
      name:{[Op.like]:`%${name}%`}
    },
    order: [["name", "ASC"]],
  });
  res.status(200).json({books})
})

module.exports = {
  getBook,
  postBook,
  updateBook,
  deleteBook,
  rentBook,
  sellBook,
  searchBook
};
