const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
router.get('/feed/:id',controller.showOnePost);
router.get('/feed',controller.getHomepage);
router.get('/',controller.redirectHomepage);
router.post('/feed',controller.postNewPost);
router.all('/feed/edit/:id',controller.updateOnePost);
router.get('/delete/article/:id',controller.deleteOnePost);


module.exports=router;