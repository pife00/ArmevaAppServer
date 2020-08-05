const express = require("express");
const router = express();
const {Person} = require("../database/models/Schema");
const {User} = require("../database/models/Schema");
const { Types } = require("mongoose");


router.get("/api", async(req,res)=>{
    const Data = await Person.find({},(err,data)=>{
        res.send(data);
    });
});

router.get("/api/user",(req,res)=>{
   const Data = User.find({},(err,data)=>{
       res.send(data);
   });
});

router.post("/api/userDeuda",(req,res)=>{
    const user = User.find({Nombre:req.body.Nombre},(err,data)=>{
        res.send(data);
    });
    console.log(req.body);
});

router.post("/api/userDeudaPagada",(req,res)=>{
    PagoDeudaRegistro(req,res);
    PagoDeudaUsuario(req,res);

       
});

router.post("/api/userPartial",(req,res)=>{
    const user = User.find({$text:{$search:req.body.Nombre}},(err,data)=>{
        res.send(data);
    });
});

router.post("/api/registroPartial",(req,res)=>{
    const user = Person.find({$text:{$search:req.body.Nombre}},(err,data)=>{
        res.send(data);
    });
});

router.post("/api/userExist",(req,res)=>{
    const exist = User.exists({Nombre:req.body.Nombre},(err,data)=>{
        res.send(data);
    });
});

router.post("/api/abono",(req,res)=>{
    const abono = parseInt(req.body.Abono);
    const user = User.updateOne(
        {"Actividad._id":req.body._id},
        {$push:{
            "Actividad.$.Abono":abono
        }},
        (err,data)=>{
            if(err){
                console.log(err)
            }else{
                console.log(data)
                res.send(data);
            }
        }
    )
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



router.post("/api/newUser",(req,res)=>{
    const dataPost = new User({
        Nombre: req.body.Nombre,
        Telefono:req.body.Telefono,
        Direccion:req.body.Direccion,
        Oficio:req.body.Oficio,
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

router.post("/api/getDeleteUser", (req, res) => {
    const user = User.deleteOne({_id: req.body.id}, (err, data) => {
        if (err) {
         
        } else {
            res.send(data);
        }
    });
    
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
  // res.send(req.body);
   // console.log(req.body);


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

PagoDeudaRegistro=(req,res,callback)=>{
    const dataPost = Person.updateOne(
        {_id:req.body._id},
        {$set:{
            "Deuda":req.body.Deuda,
            "Categoria":req.body.Categoria,
        }},
        (err,data)=>{
        if(err){
            
        }else{
            
        } 
        callback = dataPost;
         return callback;      
    });
    
},

PagoDeudaUsuario=(req,res)=>{
    
    const datapost = User.updateOne(
         {"Actividad._id":req.body._id},
         {$set:{
             "Actividad.$.Deuda":req.body.Deuda,
             "Actividad.$.Categoria":req.body.Categoria,
         }},
         (err,data)=>{
         if(err){
             res.send(data);
         }else{
            res.send(data);
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



router.post("/api/getData",async(req,res)=>{
    var dataPost = new Person();
    if(req.body.Categoria == "Deuda"){
        dataPost = new Person({
            Nombre: req.body.Nombre,
            Productos: req.body.Productos,
            Precio: req.body.Precio,
            Deuda:"Activa",
            Cantidad:req.body.Cantidad,
            Categoria: req.body.Categoria,
            Fecha:  new Date()
        });
    }else{
        dataPost = new Person({
            Nombre: req.body.Nombre,
            Productos: req.body.Productos,
            Precio: req.body.Precio,
            Cantidad:req.body.Cantidad,
            Categoria: req.body.Categoria,
            Deuda:"No",
            Fecha:  new Date()
        });
    }

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
  
};

module.exports = router;