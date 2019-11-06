const {Router} = require('express');
const router = Router();

module.exports = router;

router.get('/',(req, res) =>{
    res.send('Index page');
});

router.get('/upload' ,(req, res) =>{
    res.send('Form');
});

router.post('/upload',(req, res)=>{
    res.send('uploaded');
});

router.get('/image/:id',(req, res) => {
    res.send('profile');
});
router.get('/image/:id/delete',(req, res) => {
    res.send('img deleted');
});