const express = require('express');
const router = express.Router();
const connection = require('../database/databaseConnection');

router.get('/', (req,res,next) => {
	// console.log('SELECT * FROM book_bio')
	connection.query('SELECT book_bio.id as book_ID,services.service_name,services.city,services.price,services.status FROM book_bio LEFT JOIN services ON services.id=book_bio.id ', (err, response) => { 
		if(err)
			res.status(400).json({message:'Error in db connection.'});
		if(response)
		res.status(200).json({message:'Service detail',data:response});
	});	 
});
router.post('/add', (req,res,next) => {
	connection.query(`SELECT * FROM book_bio WHERE u_id=${req.body.logid} AND b_id=${req.body.getID}`, (err, response) => { 
	if(err)
	res.status(400).json({message:'Error in db connection.'});
	if(response)
		if(response.length==0){
			connection.query(`INSERT INTO book_bio (u_id,b_id) VALUES(${req.body.logid},${req.body.getID})`, (err, response) => { 
			if(err)
			res.status(400).json({message:'Error in db connection.'});
			if(response)
				res.status(200).json({status:'success',message:'Sent request'});
			});
		}else{
			res.status(200).json({status:'exist',message:'Request is in process'});
		}
	 }); 
});
router.get('/:id', (req,res,next) => { 
	connection.query(`UPDATE services SET status=1 WHERE id=${req.params.id}`, (err, response) => { 
		if(err)
		res.status(400).json({message:'Error in db connection.'});
		if(response)
			res.status(200).json({status:'success',message:'Sent request'});
		});
});

module.exports = router;