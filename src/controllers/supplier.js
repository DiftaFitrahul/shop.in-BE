const Supplier = require('../models/Supplier')
const Product = require('../models/Product')

exports.registerSupplier = async(req, res) =>{
    
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


    await Supplier.findOne({where : {email : email}})
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

exports.addProducts =async (req, res) =>{
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

    await Product.findOne({where: {
        name: name,
        SupplierId: supplierId
      }}).then(async result =>{
        if(result && result.name === name && result.SupplierId === supplierId){
            return res.status(409).json({
                message: 'Product already existed'
            })
        }
        
        
       await Product.create({
            name: name,
            price: price,
            quantity: quantity,
            description: description,
            SupplierId: supplierId
        }).then(result=>{
            console.log(JSON.stringify(result));
            return res.status(201).json({message: 'Success add product', data: result.toJSON()})
        }).catch(err=>{
            return res.status(500).json({err: 'Error occured while adding product'})
        })
    }).catch(err=> res.status(500).json({err : 'Error occured when adding product'}))

}

exports.editProduct = async (req, res) =>{
    const {productId, supplierId} = req.query;
    console.log(productId, supplierId)

    const allowedFields = [
        "name",
        "price",
        "quantity",
        "description",
        "imageUrl",
    ];

    const updatedFields = {};

    for (const field of allowedFields) {
        if (req.body[field] !== undefined) {
            updatedFields[field] = req.body[field];
        }
    }

    if (Object.keys(updatedFields).length === 0) {
        return res
            .status(400)
            .json({ message: "No valid fields provided for update!" });
    }

    
       await Product.update(updatedFields, {where: {
            id : `${productId}`,
            SupplierId : `${supplierId}`
        },
        returning: true,
        
    }).then(result=>{
            return res.status(201).json({message: 'Success add product', data : result[1]})
        }).catch(err=>{
            console.log(err)
            return res.status(500).json({err: 'Error occured while adding product'})
        })
}

exports.deleteProduct = async  (req, res)=>{
    const {id} = req.params;

   await Product.destroy({where: {
        id: id
    }})
    .then(
        result => res.status(200).json({message : 'Succes delete product'})
    )
    .catch(
        err=> res.status(500).json({err: 'Error when deleting product'})
    )
}