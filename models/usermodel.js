const mongoose=require('mongoose');


const userSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    cars:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'car'
    }]
})

const User=mongoose.model('user',userSchema)

module.exports=User;