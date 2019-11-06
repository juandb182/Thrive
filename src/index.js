const express = require('express');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');

//initialization
const app = express();

//SETTINGS
//connect the server
app.set('port', process.env.PORT || 3000);
//indicate the path of views' folder
app.set('views', path.join(__dirname,'views'));
//templates engine
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(morgan('dev'));
//understand the inputs in my server
app.use(express.urlencoded({extended:false}));
app.use(multer({dest: path.join(__dirname, 'public/img/uploads')}).single('image'));
//global variables

//ROUTES
app.use(require('./routes/index'));

//statics field

//start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
    
});