'use strict';

import React, {useEffect, useState, Fragment} from "react";
import useMovieSearch from "./useMovieSearch.jsx";

export default function MovieSearch(){
	const {
		movieName,
		movies, 
		loading,
		error,
		setMovieName,
		setMovieList,
		setError,
		fetchMovies
	} = useMovieSearch();

	useEffect(()=>{
		console.log("Movie Search Init");				
		fetchMovies().then((movieData) => {
			setMovieList(movieData)
		}).catch((error) => {
			setError(error);
		});
	},[]);

	/**
	 * invoked on the click of form submit
	 * **/
	const handleSearch = (e) => {
		e.preventDefault();
		fetchMovies().then((movieData) => {
			setMovieList(movieData);			
		}).catch((error) => {
			setError(error);
		});
	}

	/**
	 * invoked when change in text value in text box
	 * **/
	const handleChange = (e)=>{		
		setMovieName(e.target.value); // sets 'searchQuery'
	}

	if(loading === true) {
		return (<p> Loading...</p>);
	}

	if(error !== undefined && error !== null){		
		return (<p> Error: {error.message}</p>);
	}	

	return (
		<Fragment>
			<form className="form-inline" onSubmit={handleSearch}>
				<div className="form-group">
					<label htmlFor="movietextbox">Search</label>&nbsp;
					<input type="text" className="form-control" id="movietextbox" placeholder="Enter Movie Name" onChange={handleChange} />
				</div>
				<button type="submit" className="btn btn-primary">Enter</button>
			</form>
			<br/>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th>Sr No</th>
						<th>Movie Name</th>
						<th>Type</th>						
						<th>Genre</th>
						<th>Released Date</th>
						<th>Poster</th>
					</tr>
				</thead>
				<tbody>
						{movies.map((movieObj)=>{
							
							const imageUrl = movieObj["primaryImage"];
							const movieCaption = movieObj["originalTitle"];

							const movieId = movieObj["id"];
							const movieTitle = movieObj["originalTitle"];
							const releasedDate = movieObj["releaseDate"];
							const movieType = movieObj["type"];
							const movieGenre = (movieObj["genres"] !== undefined && movieObj["genres"] !== null) ? movieObj["genres"][0] : "N/A";

							return (
								<tr key={movieId}>
									<td>{movieId}</td>
									<td>{movieTitle}</td>
									<td>{movieType}</td>
									<td>{movieGenre}</td>								
									<td>{releasedDate}</td>
									<td>
										<img src={imageUrl} alt={movieCaption} height="290px" width="300px" />
									</td>
								</tr>
							)	
						})}										
				</tbody>	
			</table>
		</Fragment>
	);
}

