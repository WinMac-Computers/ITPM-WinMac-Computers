const router = require("express").Router();
const Promotion = require("../models/Promotion");

router.route("/create").post(async (req, res) => {
  const { promotionName, season, dataModified, checkingDate } = req.body;

  const resolved = Boolean(req.body.resolved);

  const discount = Number(req.body.discount);

  const dataCreated = Date(req.body.dataCreated);

  const newPromotion = new Promotion({
    promotionName,
    season,
    dataModified,
    checkingDate,
    discount,
    dataCreated,
    resolved,
  });

  const isAvailable = await Promotion.findOne({
    promotionName: { $regex: new RegExp(promotionName, "i") },
    checkingDate: checkingDate,
  });

  if (isAvailable) {
    return res
      .status(401)
      .json({ error: "Already Promotion ! Plz promote something new 😀" });
  }

  await newPromotion
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

router.route("/").get(async (req, res) => {
  await Promotion.find()
    .then((promotion) => res.status(200).json(promotion))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

router.route("/get/:id").get(async (req, res) => {
  const { id } = req.params;
  await Promotion.findById(id)
    .then((promotions) => res.status(200).json(promotions))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

router.route("/delete/:id").delete(async (req, res) => {
  const { id } = req.params;
  await Promotion.findByIdAndRemove(id)
    .then(() => res.status(200).json({ message: "Successfully deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

router.route("/update/:id").put(async (req, res) => {
  const { id } = req.params;
  const { promotionName, season, dataModified, discount } = req.body;

  await Promotion.findByIdAndUpdate(id, {
    promotionName,
    season,
    dataModified,
    discount,
  })
    .then(() => res.status(200).json({ message: "Successfully Updated" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

router.route("/resolve/:id").put(async (req, res) => {
  const { id } = req.params;
  const resolved = Boolean(req.body.resolved);
  const { dataModified } = req.body;
  await Promotion.findByIdAndUpdate(id, { resolved, dataModified })
    .then(() => res.status(200).json({ message: "Successfully Updated" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

module.exports = router;
