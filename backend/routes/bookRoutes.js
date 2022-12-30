const express = require("express");
const router = express.Router();
const {protectedRoute}= require("../midlleware/authHandlerMiddleware")
const {
  getBook,
  postBook,
  updateBook,
  deleteBook,
  rentBook,
  sellBook,
  searchBook,
} = require("../controllers/bookController");

router.route("/").get(protectedRoute, getBook).post(protectedRoute,postBook);
router
  .route("/:bookId")
  .put(protectedRoute, updateBook)
  .delete(protectedRoute, deleteBook);
router.route("/rent/:bookId").put(protectedRoute, rentBook)
router.route("/sell/:bookId").put(protectedRoute, sellBook);
router.route("/search").get(protectedRoute, searchBook)

module.exports = router;
