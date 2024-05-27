const express = require('express');
const {createMessage, getMessages} = require('../Controllers/messageController');
const router= express.Router();

router.post('/create', createMessage);
router.get('/:chatID', getMessages);

module.exports=router;