const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI
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