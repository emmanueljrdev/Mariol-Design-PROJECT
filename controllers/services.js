const servicesRouter = require('express').Router();
const Service = require('../models/services');


servicesRouter.get('/', async (request, response) => {
    const user = request.user;
  
    if (!user) {
      return response.sendStatus(401);
    }
  
  if (user.admin !== true) {
    const services = await Service.find({ user: user.id });
    return response.status(200).json(services);
  }

    const services = await Service.find({});
  
  console.log(services);
  
  
  
    // enviar los contactos al frontend
    return response.status(200).json(services);
  
  
  });

servicesRouter.get('/:id', async (request, response) => {
  const user = request.user;

  if (!user) {
    return response.sendStatus(401);
  };

  const { isApproved } = request.body;

  await Service.findByIdAndUpdate(request.params.id, { isApproved });

  return response.sendStatus(200);
});

  module.exports = servicesRouter;