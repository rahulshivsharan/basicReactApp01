import { makeAutoObservable } from 'mobx';

class EmployeeStore{
	all = [
		{ "id" : 1, "name" : "Tom Livingston", "email" : "tom@gmail.com", "salary" : 2000 },
		{ "id" : 2, "name" : "Jack Kimdale", "email" : "jack@gmail.com", "salary" : 3000 }
	];

	constructor(){
		makeAutoObservable(this);
	}

	add(employee){
		this.all.push({
			"id" : employee["id"],
			"name" : employee["name"],
			"email" : employee["email"],
			"salary" : employee["salary"]
		});
	}

	get totalSalary(){
		const initialTotalSalary = 0;

		return this.all.reduce((total, employee) => {
			return total + parseInt(employee["salary"]);
		}, initialTotalSalary);
	}
}

const store = new EmployeeStore();

export default store;