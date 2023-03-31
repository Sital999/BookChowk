const asyncHandler = require("express-async-Handler");
const { db } = require("../models");
const Notification = db.notification;

// get notification
// GET /api/notifications
const getNotification = asyncHandler(async (req, res) => {
  const rent = await Notification.findAll({
    where: { rent: true },
    order: [["createdAt", "DESC"]],
  });
  const buy = await Notification.findAll({
    where: { buy: true },
    order: [["createdAt", "DESC"]],
  });
  const returned = await Notification.findAll({
    where: { return: true },
    order: [["createdAt", "DESC"]],
  });

  const number = await Notification.count();
  res.status(200).json({ number, rent, buy, returned });
});

// delete notification
//DELETE /api/notifications/id
const deleteNotification = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const notification = await Notification.findOne({ where: { id } });
  // delete the selected notification
  await notification.destroy();
  res.status(202).json({ notificationId: id });
});
module.exports = { getNotification, deleteNotification };
