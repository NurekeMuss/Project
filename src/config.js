const mongoose = require('mongoose');
require('dotenv').config();
    
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:admin@cluster0.2re14nq.mongodb.net/assik3', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(() => {
        console.log('Connected to MongoDB');
      }).catch((err) => {
        console.error('Error connecting to MongoDB:', err);
      });

const LoginSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true,
    },
    password:{
        type: 'string',
        required: true,
    }
},{
    timestamps:true,
})

const collection = new mongoose.model("users",LoginSchema)

module.exports = collection;