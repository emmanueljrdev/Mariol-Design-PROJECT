const briefsRouter = require('express').Router();
const Brief = require('../models/briefing');


// rutas protegidaas para saber si existe y tiene acceso
briefsRouter.post('/', async (request, response) => {
  
  const user = request.user;
  console.log(user);

  if (!user) {
    return response.sendStatus(401);
  }



  // Extraer del frontend el nombre y el número guardado del contacto.
  const { question1, question2, question3, question4, question5, question6 } = request.body;

  console.log(question1, question2, question3, question4, question5, question6);

  // Si el nombre y el numero no son válidos o no existen, envía este error a la consola.
  if (!question1 && !question2 && !question3 && !question4 && !question5 && !question6) {
    return response.sendStatus(400).json({ error: 'El texto es requerido' });
  }

  // Buscar en la base de datos el nombre y el número para que un mismo usuario no duplique contactos (no funciona).

  // const name = await todo.findOne({ text });
  // const number = await todo.findOne({ numero });



  // //Buscar si el nombre existe
  // if (name) {
  //   return response.status(400).json({ error: 'El nombre ya se encuentra en uso' });
  // }
  // // Buscar si el número existe
  // if (number) {
  //   return response.status(400).json({ error: 'El número ya se encuentra en uso' });
  // }


  // Enviar los datos a la base de datos.

  const newBrief = new Brief({
    question1, 
    question2, 
    question3, 
    question4, 
    question5, 
    question6, 
    user: user._id
  });

  console.log('si es', newBrief);

  // Guardar los datos enviados en la base de datos.
  const savedBrief = await newBrief.save();

  console.log('esto busco', savedBrief);

  user.briefing = user.briefing.concat(savedBrief._id);


  return response.status(201).json(savedBrief);
});

// extraer los contactos de la base de datos del usuario
briefsRouter.get('/', async (request, response) => {
  const user = request.user;

  if (!user) {
    return response.sendStatus(401);
  }


  const briefs = await Brief.find({});

console.log(briefs);



  // enviar los contactos al frontend
  return response.status(200).json(briefs);


});

// eliminar los contactos en la base de dato y en el frontend
briefsRouter.delete('/:id', async (request, response) => {
  const user = request.user;
  if (!user) {
    return response.sendStatus(401);
  }

  await brief.findByIdAndDelete(request.params.id);
  return response.sendStatus(204);
});

// Actualizar en la base de datos. IMPORTANTE, esto es para poder editar el contacto y enviar los datos cambiados a la base de datos.

briefsRouter.patch('/:id', async (request, response) => {
  const user = request.user;
  if (!user) {
    return response.sendStatus(401);
  }
  const { text, numero } = request.body;


  await brief.findByIdAndUpdate(request.params.id, { text, numero });

  return response.sendStatus(200);
});

module.exports = briefsRouter;