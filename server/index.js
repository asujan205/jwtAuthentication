const express =require('express');
const cors = require('cors');
const jwt= require('jsonwebtoken')
const bycrt=require('bycryptjs')
const mongoose = require('mongoose')
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
  app.listen(5000, () => console.log('Server started on port 5000'));