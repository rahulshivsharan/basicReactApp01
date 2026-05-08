'use strict'

import React, {useState, useEffect, Fragment} from "react";


export default function Product(){
		const [productData, setProductData] = useState([]);

		const getProducts = ()=>{
			return fetch('https://dummyjson.com/products').then((response)=>{
				
				if(!response.ok){
					throw new Error(`HTTP error! Status: ${response.status}`)
				}

				return response.json();
			}).then((data)=>{
				const productList = data["products"];
				return productList;
			});			
		};

		useEffect(()=>{

			getProducts().then((productList)=>{				
				setProductData(productList);
			}).catch((error)=>{
				console.log(error);
			});

		},[]);

		return (
			<Fragment>
				<div className="page-header">
					<h2>Using Fetch API to fetch Products</h2>
				</div>
				<div>
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>ID</th>
								<th>Title</th>
								<th>Description</th>
								<th>Category</th>
								<th>Price</th>
								<th>Discount Percentage</th>
								<th>Rating</th>
								<th>Stock</th>
							</tr>
						</thead>
						<tbody>
							{productData.map((product)=>{
								return (<tr>
									<td>{product["id"]}</td>
									<td><b>{product["title"]}</b></td>
									<td><i>{product["description"]}</i></td>
									<td>{product["category"]}</td>
									<td>{product["price"]}</td>
									<td>{product["discountPercentage"]}</td>
									<td>{product["rating"]}</td>
									<td>{product["stock"]}</td>
								</tr>)
							})}
						</tbody>
					</table>					
				</div>
			</Fragment>
		);
}