class Delete{
	 
	static deleteItem(id){
		return `DELETE  FROM users WHERE email='${id}'`;
	}

}

module.exports = Delete;