const mongoose= require('mongoose');
const { type } = require('os');
const {Schema,model}= 'mongoose';

const TransactionSchema = new mongoose.Schema({
    name:{type:String , required:true},
    price:{type:Number, required:true},
    description:{type:String, required:true },
    datetime:{type:Date, required:true},
});

const TransactionModel = new mongoose.model('Transaction', TransactionSchema);

module.exports= TransactionModel;