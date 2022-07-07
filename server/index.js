import express from 'express'
import cors from 'cors'
import UserRouter from './Router/userRouter.js'
import './mongo.config.js'
const app = express()
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
  app.use(cors(corsOpts));
  app.use(express.json())
  app.use('/users',UserRouter)
  app.listen(5000, () => console.log('Server started on port 5000'));