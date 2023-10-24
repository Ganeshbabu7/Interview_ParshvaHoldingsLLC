var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const { dbUrl } = require("../config/mongodb.config");
const { poDetailsModel, docketModel } = require("../schema/poSchema");

// Mongo DB Connection :
mongoose.set("strictQuery", true);
mongoose.connect(dbUrl);

/* GET home page. */
router.post("/getPoDetails", async (req, res) => {
  try {
    const result = await poDetailsModel.find(
      {},
      {
        poNumber: 1,
        supplier: 1,
        description: 1,
      }
    );
    res.status(200).send({ message: "Po Details", result });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/docketDetails", async (req, res) => {
  try {
    const { action, supplierName, poNumber } = req.body;
    if (action == "addDocket") {
      const check = await poDetailsModel.findOne({
        $and: [{ supplier: supplierName }, { poNumber: poNumber }],
      });
      if (check) {
        const result = new docketModel(req.body);
        await result.save();
        res.status(201).send({ message: "Docket Details", result });
      } else
        res.status(400).send({ message: "Supplier or PO Number is not Invalid" });
    } else if (action == "getDocket") {
      const result = await docketModel.find({}).sort({ createdAt: -1 });
      res.status(200).send({ message: "Po Details", result });
    }
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
