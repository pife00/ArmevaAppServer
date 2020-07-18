const express = require("express");
const router = express();
const {Person} = require("../database/models/Schema");
const {User} = require("../database/models/Schema");
const { Types } = require("mongoose");


router.get("/api/",(req,res)=>{
    home(req,res); 
});

router.get("/api/user",(req,res)=>{
   const Data = User.find({},(err,data)=>{
       res.send(data);
   });
});


router.post("/api/getUpdateUser",(req,res)=>{
   const user  = User.updateOne({_id:req.body._id},
    {$set:
        {
            Nombre:req.body.Nombre,
            Telefono:req.body.Telefono,
            Direccion:req.body.Direccion,
            Oficio:req.body.Oficio
        }},
    (err,data)=>{
        if(err){

        }else{
            res.status(204).send();
            console.log(data);
        }
    });
 });


router.get("/api/edit/:id", (req, res, next) => {
    res.status(204).send();
});


router.post("/api/newUser",(req,res)=>{
    const dataPost = new User({
        Nombre: req.body.Nombre,
        Telefono:req.body.Telefono,
        Direccion:req.body.Direccion
    });
    dataPost.save((err,data)=>{
        if(err){
            return console.log(err);
        }else{
            res.status(200).json(data);
        }
    });
  });

router.post("/api/getDelete", (req, res) => {
    deleteRegistro(req,res);
    deleteRegistroUsuario(req,res);
});

deleteRegistro=(req,res)=>{
    const deletePost = Person.deleteOne({_id: req.body.id}, (err, data) => {
        if (err) {
         
        } else {

        }
    });
},

deleteRegistroUsuario=(req,res)=>{
    const user = User.updateOne(
        {"Nombre":req.body.Nombre},
        {$pull:{"Actividad":{_id:req.body.id}}},
        { safe: true, upsert: true },
        (err,data)=>{
            if(err){

            }else{
                res.status(204).send();
            }
    });
},



router.post("/api/getUpdate",async (req,res)=>{

    updateRegistro(req,res);
    updateRegistroUsuarios(req,res);


});

updateRegistro=(req,res,callback)=>{
    const dataPost = Person.updateOne({_id:req.body._id},req.body,(err,data)=>{
        if(err){

        }else{

        }       
    });
    callback = dataPost;
    return callback;
},

updateRegistroUsuarios=(req,res)=>{
    
   const datapost = User.updateOne(
        {"Actividad._id":req.body._id},
        {$set:{
            "Actividad.$.Nombre":req.body.Nombre,
            "Actividad.$.Productos":req.body.Productos,
            "Actividad.$.Precio":req.body.Precio,
            "Actividad.$.Cantidad":req.body.Cantidad,
            "Actividad.$.Categoria":req.body.Categoria,
            "Actividad.$.Fecha":req.body.Fecha,
        }},
        (err,data)=>{
        if(err){

        }else{
            res.send("OK");
            console.log(data.n);
            if(data.n == 0){
                console.log(req.body);
                const user =  User.updateOne(
                    {Nombre:req.body.Nombre},
                    {$push:{Actividad:req.body}},
                    (err,data)=>{
                        if(err){
                            console.log(err);
                            console.log("No esta en la base de Datos añadir");
                        }else{
                            res.status(200).send();
                        }
                    });
            }
        }
    }); 
},



router.post("/api/getDate",(req,res)=>{
    var data = req.body.data;
    var querry = JSON.parse(data); 
    const dataPost = Person.find(
        querry, 
        (err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.send(data);
        }
    });
   
    console.log(querry);  
});

router.post("/api/getQuerry", (req, res) => {

    var Productos = req.body.querryProductos;
    var Nombre = req.body.querry;
    var querry = {};
    querry[Productos] = Nombre;
    if (Nombre != "") {
        getQuerry(querry, req, res);
    } else {
        home(req,res);
    }

});

router.post("/api/getData",async(req,res)=>{
    const dataPost = new Person({
        Nombre: req.body.Nombre,
        Productos: req.body.Productos,
        Precio: req.body.Precio,
        Cantidad:req.body.Cantidad,
        Categoria: req.body.Categoria,
        Fecha:  new Date()
    });
    dataPost.save((err,data)=>{
        if(err){
            return console.log(err);
        }
        else{
            res.status(200).json(data);
        }
    }); 

    const exist = User.exists({Nombre:req.body.Nombre},(err,data)=>{
        if(err){

        }else{
            if(data == false){
                const userPost = new User({
                    Nombre: req.body.Nombre,
                    Telefono:req.body.Telefono,
                    Direccion:req.body.Direccion,
                    Actividad: dataPost
                });
                userPost.save((err,data)=>{
                    if(err){
                        return console.log(err);
                    }else{
                        res.status(200);
                    }
                });     
            }
            if(data == true){
                getUserData(req,res,dataPost);
            }
        }
    });

});



getUserData=(req,res,data)=>{
    const user = User.updateOne({Nombre:data.Nombre},
        {$push:{Actividad:data}},
        (err,data)=>{
            if(err){
                console.log(err);
            }
            else{
               // console.log(data);
               res.status(200);
            }
        }
    );   
};




//Methods
getQuerry = async (querry, req, res, ) => {

    const dataPost = await Person.find(querry, (err, data) => {
        res.send(data);
    });
};

home = async(req,res)=>{
    const Data = Person.find({},(err,data)=>{
        res.send(data);
    });
};

module.exports = router;