const express = require('express');
const { getAllCustomer, getAddCustomerView,addCustomer,
    getUpdateCustomerView,updateCustomer,
    getDeleteCustomerView,deleteCustomer

} = require('../controllers/customerController');

const router =  express.Router();


router.get('/',getAllCustomer);
router.get('/addCustomer', getAddCustomerView);
router.post('/addCustomer', addCustomer);
router.get('/updateCustomer/:id', getUpdateCustomerView);
router.post('/updateCustomer/:id', updateCustomer);
router.get('/deleteCustomer/:id', getDeleteCustomerView);
router.post('/deleteCustomer/:id', deleteCustomer);

module.exports = {
    routes: router
}