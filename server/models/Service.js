class Service{
	constructor(service_name,user_id,city,price){
		this.service_name = service_name;
		this.user_id = user_id;
		this.city = city;
		this.price = price;
	}

	addService(){ 
		console.log(`INSERT INTO services (service_name,user_id,city,price,status) VALUES ('${this.service_name}',${this.user_id},'${this.city}','${this.price}',0)`)
		return `INSERT INTO services (service_name,user_id,city,price,status) VALUES ('${this.service_name}',${this.user_id},'${this.city}','${this.price}',0)`;
	}

	static getServiceById(id=null){
		let sql = `SELECT * FROM services where city='${id}'`;
		return sql;
	}

	static updateService(serviceId, serviceName, serviceCity, servicePrice){
		let sql = `UPDATE services SET service_name='${serviceName}', city='${servicePrice}', price='${servicePrice}' where id=${serviceId}`;
		return sql;
	}
}

module.exports = Service;