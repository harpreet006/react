const express = require('express');
const router = express.Router();
const deleteModel = require('../models/Delete');
const connection = require('../database/databaseConnection');

router.get('/:deteteItem', (req,res,next) => {
	const postData = req.params.deteteItem; 
	// console.log(postData)
	connection.query(deleteModel.deleteItem(postData), (err, response) => { 
		if(err)
			res.status(400).json({message:'Error in db connection.'});
		if(response)
			res.status(200).json({message: 'User Deleted successfully.'});
	});
	// console.log("Delete Item")
});



module.exports = router;