const Store = require("../model/store");

exports.getStoreById = async (req, res) => {
  const store = await Store.findOne({
    _id: req.body.id,
    isDeleted: { $ne: 1 },
  })
    .select({ __v: 0, password: 0 })
    .populate({
      path: "manager",
      populate: { path: "permissionIds", select: { _id: 0, title: 1 } },
      select: { _id: 0, title: 1, permissionIds: 1 },
    });

  res.json({
    store,
  });
};

exports.getAllStores = async (req, res) => {
  const store = await Store.find({ isDeleted: { $ne: 1 } });

  res.json({
    message: store,
  });
};