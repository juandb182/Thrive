const {Router} = require('express');
const router = Router();
//const multer = require('multer');

module.exports = router;

router.get('/',(req, res) =>{
    res.send('Index page');
});

router.get('/upload',(req, res) =>{
    res.render('upload');
});

router.post('/upload',(req, res)=>{
    console.log(req.file);
    res.send('uploaded');
});

router.get('/image/:id',(req, res) => {
    res.send('profile');
});
router.get('/image/:id/delete',(req, res) => {
    res.send('img deleted');
});