'use strict';

import React, {	useEffect, 
				useState, 
				useContext, 
				Fragment} from "react";
import { observer } from 'mobx-react-lite';

import EmployeeContext from './EmployeeContext.jsx';

const employeeComponentFunc = employeeFn;

const EmployeeComponent = observer(employeeComponentFunc);

export default EmployeeComponent;

function employeeFn(){

	const employeeStore = useContext(EmployeeContext);

	const [employeeName, setEmployeeName] = useState("");
	const [employeeEmail, setEmployeeEmail] = useState("");
	const [employeeSalary, setEmployeeSalary] = useState("");
	
	const loadEmployees = () => {
		return employeeStore.all.map((emp) => {
			return (<tr>
						<td>{emp["id"]}</td>
						<td><b>{emp["name"]}</b></td>
						<td><i>{emp["salary"]}</i></td>
						<td>{emp["salary"]}</td>				
				</tr>)
		});
	}

	const addEmployee = () => {
		if(employeeName === "" || employeeEmail === "" || employeeSalary === ""){
			alert("All fields are required.");
			return;
		}

		const newEmployeeObj = {
			"id" : employeeStore.all.length + 1,
			"name" : employeeName,
			"salary" : employeeSalary,
			"email" : employeeEmail
		}

		employeeStore.add(newEmployeeObj);

		setEmployeeName("");
		setEmployeeEmail("");
		setEmployeeSalary("");
	}

	return (
		<Fragment>
			<div className="page-header">
				<h2>Mobx + React Context + Hooks</h2>
			</div>

			<div className="panel panel-default">
				<div className="panel-heading">
					<h4>Add Employee</h4>
				</div>
				<div className="panel-body">

					<div className="form-group">
						<label>Name</label>

						<input 	type="text" 
								className="form-control" 
								value={employeeName} 
								onChange={(e)=>{
									setEmployeeName(e.target.value);
						}} />	
					</div>
					
					<div className="form-group">
						<label>Email</label>

						<input 	type="text" 
								className="form-control" 
								value={employeeEmail} 
								onChange={(e)=>{
									setEmployeeEmail(e.target.value);
						}} />	
					</div>

					<div className="form-group">
						<label>Salary</label>

						<input 	type="text" 
								className="form-control" 
								value={employeeSalary} 
								onChange={(e)=>{
									setEmployeeSalary(e.target.value);
						}} />	
					</div>

					<br/>

					<button className="btn btn-primary" onClick={addEmployee}>Add Employee</button>
				</div>	
			</div>
			
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4>Employee List</h4>
				</div>
				<div className="panel-body">
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Email</th>
								<th>Salary</th>								
							</tr>
						</thead>
						<tbody>
							{loadEmployees()}	
						</tbody>
					</table>						
					<hr/>
					<h4>Total salary: {employeeStore.totalSalary}</h4>		
				</div>	
			</div>
			
		</Fragment>
	);
};

