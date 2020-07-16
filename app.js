const express = require("express");
const mongoose = require("./database/mongoose")
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const history = require('connect-history-api-fallback');
const router = require("./router/router");
const path = require('path')

const app = express();


dotenv.config();


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.text({defaultCharset: 'utf-8'}));
app.use(express.json());
app.use(morgan("tiny"));

app.get("/",router);
app.get("/delete/:id",router);
app.get("/edit/:id",router);
app.get("/user",router);

app.post("/newUser",router);
app.post("/getDelete",router);
app.post("/getUpdate",router);
app.post("/getUpdateUser",router);
app.post("/getData",router);
app.post("/getQuerry",router);
app.post("/getDate",router);


if(process.env.NODE_ENV == "production"){
    app.use(express.static(__dirname+"/public/"));
    app.get("/.*/",(req,res)=>{
        res.sendFile(__dirname+"./public/index.html");
    });
}

app.listen(process.env.PORT || 3000);