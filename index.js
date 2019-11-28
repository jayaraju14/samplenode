//import packages
const express=require('express');
const app=express();
const logger=require('morgan');
const bodyParser=require('body-parser');
const user=require('./routes/users');
const mongoose=require('mongoose');
//mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/apiproject');
//middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
//Routes
app.get('/',(req,res,next)=>{
  res.status(200).send("this is main page");
})

app.use('/api/user', user)


//Catch 404 errors and forword to error handler
app.use((req,res,next)=>{
  const err=new Error('Not Found');
  const status=404;
  next(err);
});
//Error handler
app.use((err,req,res,next)=>{
  const error=app.get('env')==='development' ?err:{};
  const status=err.status || 500;

  res.status(status).json({
    error:{
      message:error.message
    }
  });

console.error(err);

})


const port=app.get('port') || 3000;
app.listen(port,'0.0.0.0',()=>{
  console.log(`port running at ${port}`)
})