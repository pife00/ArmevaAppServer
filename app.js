const express = require("express");
const mongoose = require("./database/mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const history = require('connect-history-api-fallback');
const router = require("./router/router");
const path = require('path');

const app = express();


dotenv.config();


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.text({defaultCharset: 'utf-8'}));
app.use(express.json());
app.use(morgan("tiny"));




app.get("/api",router);
app.get("/api/delete/:id",router);
app.get("/api/edit/:id",router);
app.get("/api/user",router);

app.post("/api/newUser",router);
app.post("/api/getDelete",router);
app.post("/api/getUpdate",router);
app.post("/api/getUpdateUser",router);
app.post("/api/getData",router);
app.post("/api/getQuerry",router);
app.post("/api/getDate",router);
app.post("/api/userExist",router);
app.post("/api/userPartial",router);

app.listen(process.env.PORT || 3000);
console.log("Servidor corriendo en el puerto 3000");