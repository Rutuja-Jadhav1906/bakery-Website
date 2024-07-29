const mongoose = require("mongoose");

const initData = require("./cookieData.js");

const Cookie = require("../../models/cookie.js")

main().then(()=>{
    console.log("connected to db");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/bakery');
}

const initDB = async ()=>{
    await Cookie.deleteMany({});
    await Cookie.insertMany(initData.data);
    console.log("data is stored")
}

initDB()