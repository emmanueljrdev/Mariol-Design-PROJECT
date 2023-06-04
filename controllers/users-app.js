const userAppRouter = require('express').Router();
const User = require('../models/user');


userAppRouter.get('/', async (request, response) => {

    const user = request.user;
    
    
    
    if (user.admin !== true) {
      
      return response.status(200).json(user);
    }
    
    const users = await User.find({});
    
    
    return response.status(200).json(users);
    
    });

module.exports = userAppRouter;




