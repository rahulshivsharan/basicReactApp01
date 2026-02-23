'use strict';

import React, {useEffect, useState} from "react";

const withMovieData = withMovieDataFn;

export default withMovieData;


function withMovieDataFn (WrapperComponent) {

	const MovieDataComponent = MovieDataComponentFunc;

	return MovieDataComponent;

	/**
	 * Below is the function which is 
	 * going to be returned when 'withMovieDataFn' 
	 * is called.
	 * */
	function MovieDataComponentFunc(props){		
		const [movies, setMovies] = useState([]);
		const [loading, setLoading] = useState(true);
		const [error, setError] = useState(undefined);
		const [searchQuery, setSearchQuery] = useState("star");

		const requestConfig = {
			"headers": {
		    	"x-rapidapi-host": "imdb236.p.rapidapi.com",
		    	"x-rapidapi-key": "94afd7eb28mshe44cffb31930cb6p14b211jsn7b2c8149e2ec"
		  	}
		}

		const fetchMovieData = (movieName) => {
			
			setLoading(true);
			const date = new Date();
			const url = "https://imdb236.p.rapidapi.com/api/imdb/search?primaryTitleAutocomplete="+movieName+"&type=movie&rows=25&sortOrder=ASC&sortField=id&time="+date.getTime();	

			$.ajax({
				...requestConfig,
				"url" : url,
				"type" : "GET",
				"success" : function(data){
					const movieList = data["results"];					
					setMovies(movieList);
					setLoading(false);
				},
				"error" : function(xhr, status, error){					
					setError(error);
					setLoading(false);
				}
			});
		};

		/**
		 * useEffect will be called only once
		 * on load if the component.
		 * */
		useEffect(()=>{

			// below function calls movie api
			fetchMovieData(searchQuery);
		},[]);

		return (<WrapperComponent 	{...props} 
									movies={movies} 
									loading={loading} 
									error={error}
									searchQuery={searchQuery}
									setSearchQuery={setSearchQuery}
									fetchMovieData={fetchMovieData} />);
	};
	
};


