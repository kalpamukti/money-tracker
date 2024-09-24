const mongoose = require('mongoose');
const express= require('express');
const cors= require('cors');
require('dotenv').config();
const Transaction=require('./models/transaction.cjs')
const app = express();

app.use(cors());
app.use(express.json());
app.get('/api/test',(req ,res)=>{
   res.send('test ok2'); 
});

app.post('/api/transaction', async(req,res)=>{
   
   await mongoose.connect(process.env.MONGO_URL);
   const {price, name, description, datetime} = req.body;
   const transaction =await Transaction.create({price, name,description,datetime});
   res.json(transaction);
});

app.get('/api/transactions', async(req,res)=>{
 await mongoose.connect(process.env.MONGO_URL);
 const transacations= await Transaction.find();
 res.json(transacations);
});
app.listen(4000);