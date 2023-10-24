// MongoDB Configurations :
require("dotenv").config();
const mongodb = require("mongodb");
const dbUrl = process.env.MONGODBURL;
const MongoClient = mongodb.MongoClient;

module.exports = { dbUrl, MongoClient };
