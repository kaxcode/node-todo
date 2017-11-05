const express = require('express');
const router = express.Router();

router.post('/todos', function(req, res){
	res.send({type:'POST'})
});

module.exports = router;