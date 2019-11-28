const mongoose=require('mongoose');

const carSchema=mongoose.Schema({
    make:String,
    year:Number,
    Model:String,
    seller:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }]
});

const Car=mongoose.model('car',carSchema);
module.exports=Car;