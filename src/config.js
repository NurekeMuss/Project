const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://admin:admin@cluster0.2re14nq.mongodb.net/assik3'
    ).then(() => {
        console.log('db connection')
    }).catch((err) =>{
        console.log('error connecting to db', err )
    })

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