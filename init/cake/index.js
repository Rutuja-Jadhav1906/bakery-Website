const mongoose = require("mongoose");

const initData = require("./cakeData.js");

const Cake = require("../../models/cake.js")

main().then(()=>{
    console.log("connected to db");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/bakery');
}

const initDB = async ()=>{
    await Cake.deleteMany({});
    await Cake.insertMany(initData.data);
    console.log("data is stored")
}

initDB()