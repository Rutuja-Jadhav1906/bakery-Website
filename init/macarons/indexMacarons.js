const mongoose = require("mongoose");

const initData = require("./macaronData.js");

const Macaron = require("../../models/macarons.js")

main().then(()=>{
    console.log("connected to db");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/bakery');
}

const initDB = async ()=>{
    await Macaron.deleteMany({});
    await Macaron.insertMany(initData.data);
    console.log("data is stored")
}

initDB()