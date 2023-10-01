const Supplier = require('../models/Supplier')

exports.registerSupplier = (req, res) =>{
    
    if (
        !req.body.name ||
        !req.body.email ||
        !req.body.password 
    ){
        return res
            .status(400)
            .json({ message: "Please fill all required fields!" });
    }

    const {name, email, password } = req.body;


    Supplier.findOne({where : {email : email}})
        .then(supplier=>{
            if(supplier && supplier.email === email){
                return res.status(409).json({
                    message: 'Email already registered'
                })
            }
        Supplier.create({
            name : name,
            email : email,
            password : password
        }).then(result =>{
            console.log(JSON.stringify(result))
            return res.status(201).json({
                message : 'Succes Register User Supplier'
            })
        }).catch(err=>{
            return res.status(500).json({err : 'error when register user supplier'})
        })
    })
    .catch(err=>{
        return res.status(500).json({
            err: 'Error happened'
        })
    })
}