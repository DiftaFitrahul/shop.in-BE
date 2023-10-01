const Customer = require('../models/Customer')

exports.registerCustomer = (req, res) =>{
    
    if (
        !req.body.name ||
        !req.body.phone ||
        !req.body.email ||
        !req.body.password 
    ){
        return res
            .status(400)
            .json({ message: "Please fill all required fields!" });
    }

    const {name, phone, email, password } = req.body;


    Customer.findOne({where : {email : email}})
        .then(customer=>{
            if(customer && customer.email === email){
                return res.status(409).json({
                    message: 'Email already registered'
                })
            }
        Customer.create({
            name : name,
            phone : phone,
            email : email,
            password : password
        }).then(result =>{
            console.log(JSON.stringify(result))
            return res.status(201).json({
                message : 'Succes Register User Customer'
            })
        }).catch(err=>{
            return res.status(500).json({err : 'error when register user customer'})
        })
    })
    .catch(err=>{
        return res.status(500).json({
            err: 'Error happened'
        })
    })
}