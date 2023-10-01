const Supplier = require('../models/Supplier')
const Product = require('../models/Product')

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

exports.addProducts = (req, res) =>{
    if (
        !req.body.name ||
        !req.body.price ||
        !req.body.quantity ||
        !req.body.description ||
        !req.body.supplierId

    ){
        return res
            .status(400)
            .json({ message: "Please fill all required fields!" });
    }

    const{ name, price, quantity, description , supplierId} = req.body;

    Product.findOne({where: {
        name: name,
        SupplierId: supplierId
      }}).then(result =>{
        if(result && result.name === name && result.SupplierId === supplierId){
            return res.status(409).json({
                message: 'Product already existed'
            })
        }
        
        Product.create({
            name: name,
            price: price,
            quantity: quantity,
            description: description,
            SupplierId: supplierId
        }).then(result=>{
            console.log(JSON.stringify(result));
            return res.status(201).json({message: 'Success add product'})
        }).catch(err=>{
            return res.status(500).json({err: 'Error occured while adding product'})
        }).catch(err=> res.status(500).json({err : 'Error occured when adding product'}))
    })

}