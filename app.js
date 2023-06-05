require('dotenv').config();
// 1- Instalar express
const express = require('express');
// Conectar la app con express
const app = express();
// Instalar mongoose
const mongoose = require('mongoose');
// Utilizar herramienta path para las rutas de acceso
const path = require('path');
const userRouter = require('./controllers/users');
const userAppRouter = require('./controllers/users-app');


const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const loginRouter = require('./controllers/login');
const appRouter = require('./controllers/main-app');
const briefsRouter = require('./controllers/briefings');
const servicesRouter = require('./controllers/services');
const logOutRouter = require('./controllers/logout')
const userExtractor = require('./middleware/auth');
const resetRouter = require('./controllers/reset');
const { MONGO_URI } = require('./config');







(async () => {
    try {
      await mongoose.connect(MONGO_URI);
      console.log('Connected to MONGODB');
    } catch (error) {
      console.log('Not connected');
    }
  })();


// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

  // Rutas de acceso al frontend

app.use('/', express.static(path.resolve('views', 'home')));
app.use('/components', express.static(path.resolve('views', 'components')));
app.use('/images', express.static(path.resolve('img')));
app.use('/signup', express.static(path.resolve('views', 'signup')));
app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/app/:id', express.static(path.resolve('views', 'app')));
app.use('/verify/:id/:token', express.static(path.resolve('views', 'verify')));
app.use('/purchase/:id/', express.static(path.resolve('views', 'purchase-app')));
app.use('/reset-password', express.static(path.resolve('views', 'reset')));
app.use('/reasign/:token', express.static(path.resolve('views', 'reasign')));
app.use('/services', express.static(path.resolve('views', 'services-page')));



// Middlewares backend

app.use(morgan('tiny'));


// Rutas de acceso al backend
app.use('/api/users', userRouter);
app.use('/api/users-app', userExtractor, userAppRouter);
app.use('/api/login', loginRouter);
app.use('/api/main-app', userExtractor, appRouter);
app.use('/api/briefings', userExtractor, briefsRouter);
app.use('/api/services', userExtractor, servicesRouter);
app.use('/api/logout', logOutRouter);
app.use('/api/reset', resetRouter);










module.exports = app;