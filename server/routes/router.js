const express=require('express');
const route=express.Router()
const services=require('../services/render');
const controller=require('../controller/controller');

//GET METHOD ROOT ROUTE
route.get('/',services.homeRoutes)
//GET METHOD add user ROUTE
route.get('/add-user',services.add_user)
//GET METHOD update user ROUTE
route.get('/update-user',services.update_user)

//api
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

module.exports=route