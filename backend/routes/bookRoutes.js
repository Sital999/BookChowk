const express = require("express");
const router = express.Router();
const multer= require("multer");
const path = require("path");
const {protectedRoute}= require("../midlleware/authHandlerMiddleware")
const {
  getBook,
  getBooks,
  postBook,
  updateBook,
  deleteBook,
  rentBook,
  sellBook,
  searchBook,
} = require("../controllers/bookController");

const storage = multer.diskStorage({
  destination: "./frontend/src/media/Images/bookImage/",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});

router.route("/").get(protectedRoute, getBooks).post(protectedRoute,upload.single('bookImage'),postBook);
router
  .route("/:bookId")
  .get(protectedRoute,getBook)
  .put(protectedRoute, updateBook)
  .delete(protectedRoute, deleteBook);
router.route("/rent/:bookId").put(protectedRoute, rentBook)
router.route("/sell/:bookId").put(protectedRoute, sellBook);
router.route("/search").get(protectedRoute, searchBook)

module.exports = router;
