const appRouter = require('express').Router();
const Service = require('../models/services');

appRouter.post('/', async (request, response) => {
  const user = request.user;

  if (!user) {
    return response.sendStatus(401);
  };

  const { typeOfService, pack, payRef, method } = request.body;

  console.log(typeOfService, pack, payRef, method);

  const newService = new Service({
    typeOfService,
    pack,
    payRef,
    method,
    user: user._id
  });

  console.log(newService);

  const savedService = await newService.save();

  console.log('esto busco', savedService);

  user.services = user.services.concat(savedService._id);


  return response.status(201).json(savedService);

});

appRouter.patch('/:id', async (request, response) => {
  const user = request.user;
  if (!user) {
    return response.sendStatus(401);
  }
  const { isApproved } = request.body;


  await Service.findByIdAndUpdate(request.params.id, { isApproved });

  return response.sendStatus(200);
});

appRouter.delete('/:id', async (request, response) => {
  const user = request.user;
  if (!user) {
    return response.sendStatus(401);
  }

  await Service.findByIdAndDelete(request.params.id);
  return response.sendStatus(204);
});

appRouter.get('/', async (request, response) => {
    const user = request.user;
  
    if (!user) {
      return response.sendStatus(401);
    }
  
  
  
    // enviar los contactos al frontend
    return response.status(200).json(user.id);
  
  
  });



module.exports = appRouter