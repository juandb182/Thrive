const express = require('express');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const uuid = require('uuid/v4');

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
//to put the type of the file
const storage = multer.diskStorage({
    destination : path.join(__dirname, 'public/img/uploads'), 
    filename:(req,file,cb,filename) => {
        cb(null,uuid() + path.extname(file.originalname)); 
    }
});
app.use(multer({storage: storage}).single('image'));
//global variables

//ROUTES
app.use(require('./routes/index'));

//statics field

//start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
    
});