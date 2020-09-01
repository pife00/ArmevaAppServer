const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); 

mongoose.connect(process.env.MONGO_SERVER_DB,{useUnifiedTopology:true, useNewUrlParser: true })
.then(()=>console.log("DB conectado a Gente")).catch((error)=>console.log("No se puede conectar"));


module.exports = mongoose;