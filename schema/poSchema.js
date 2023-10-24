const mongoose = require("mongoose");

const poDetailsSchema = new mongoose.Schema(
  {
    recordType: { type: String },
    poNumber: { type: String },
    chg: { type: String },
    com: { type: String },
    type: { type: String },
    conf: { type: String },
    orderDate: { type: String },
    accountNumber: { type: String },
    supplier: { type: String },
    currency: { type: String },
    item: { type: String },
    commodityCode: { type: String },
    description: { type: String },
    qty: { type: String },
    un: { type: String },
    orderValue: { type: String },
    amountInvoiced: { type: String },
    wbsCode: { type: String },
    contract: { type: String },
    remarks: { type: String },
  },
  { timestamps: true },
  { versionKey: false },
  { collection: "poDetails" }
);

const docketSchema = new mongoose.Schema(
  {
    name: { type: String },
    startTime: { type: String },
    endTime: { type: String },
    noOfHoursWorked: { type: String },
    ratePerHour: { type: String },
    supplierName: { type: String },
    poNumber: { type: String },
  },
  { timestamps: true },
  { versionKey: false },
  { collection: "docketDetails" }
);

const docketModel = mongoose.model("docketDetails", docketSchema);
const poDetailsModel = mongoose.model("poDetails", poDetailsSchema);

module.exports = {
  docketModel,
  poDetailsModel,
};
