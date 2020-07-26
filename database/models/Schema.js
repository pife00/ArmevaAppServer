const mongoose = require("mongoose");
const date= new Date();

const PersonSchema = new mongoose.Schema({
    Nombre:{
        type:String,
        required:[true,'El nombre es necesario']
    },
    Productos:String,
    Precio:{
        type:Number,
        minlength:3
    },
    Cantidad:{
        type:Number,
        minlength:1
    },
    Categoria:String,
    Fecha: Date
});

var Person = mongoose.model("Person",PersonSchema);

const UserSchema = new mongoose.Schema({
    Nombre: {
        type:String,
        required:[true,'El nombre es necsario']
    },
    Telefono: String,
    Direccion: String,
    Actividad: [PersonSchema],
    Oficio:String,
    Sexo:String,
    Cordenada:Array
},{collection:'usuarios'});


var User = mongoose.model("User",UserSchema);
module.exports = {Person:Person,User:User};