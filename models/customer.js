const mongoose = require('mongoose'); // Erase if already required
const Joi = require('joi');


const customerSheme = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        maxlength:50,
        minlength:5,
         
    },
    lastname:{
        type:String,
        required:true,
        maxlength:50,
        minlength:5,
    },
    phonenumber:{
        type:String,
        required:true,
        maxlength:50,
        minlength:11,
    },
    cnic:{
        type:String,
        required:true,
       
    },
    address:{
        type:String,
        required:true,
    },
});

//Export the model
const Customer = mongoose.model('Customer', customerSheme);

const validatCustomer = (customer) => {
    const schema = {
        firstname: Joi.string().min(5).max(50).required(),
        lastname: Joi.string().min(5).max(50).required(),
        phonenumber: Joi.string().min(11).max(50).required(),
        cnic: Joi.string().required(),
        address: Joi.string().required(),
    }

    return Joi.validate(customer, schema);
}

module.exports.Customer = Customer;
module.exports.validate = validatCustomer;

// module.exports = mongoose.model('Customer', customerSheme);