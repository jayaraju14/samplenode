const User=require('../models/usermodel');
const Car=require('../models/carmodel')
module.exports={
    index:async (req,res,next)=>{
            try{
                const users = await User.find({})
                res.status(200).json(users);
            }
        catch(err)
        {
            next(err);
        }
},  
    createUser: async (req,res,next)=>{
        try{
            const createUser = new User(req.body);
            const saveuser=await createUser.save();
                res.status(201).json(saveuser);
        }
        catch(err)
        {
            next(err);
        }
        
},
    indexById:async (req,res,next)=>{
        try
        {
            const { userId } = req.params
           const result=await User.findById(userId)
                res.status(201).json(result)
        }
        catch(err)
        {
            next(err)
        }
    },

    updateUser: async (req, res, next) => {
             const { userId } = req.params;
             const newUser=req.body;
           const result=await User.findByIdAndUpdate(userId, newUser);        
           res.status(200).json(result);
    },


    getUserCars:async(req,res,next)=>{
        try{
            const { userId } = req.params;
            const result = await User.findById(userId);
            res.status(200).json(result);
        }
        catch(err)
        {
            next(err);
        }
        
    },

    newUserCars:async(req,res,next)=>{
        const {userId}=req.params;
        const newCar=new Car(req.body);
        console.log('newCar',newCar);
         const user=await User.findById(userId);
          newCar.seller=user;
         await newCar.save();
         user.cars.push(newCar);
         await user.save();
         res.status(201).json(newCar);
    }
};