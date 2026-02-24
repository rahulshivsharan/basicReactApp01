'use strict';

import React, {useEffect, useState, useReducer} from "react";


const initialState = {
	"movieName" : "tony",
	"movies" : [],
	"loading" : false,
	"error" : null
}

const reducerFunc = (state, action) => {
	if(action.type === "SET_MOVIE_NAME"){
		return {
			...state,
			"movieName" : action.payload
		}
	}else if(action.type === "FETCH_MOVIE_REQUEST"){
		return {
			...state,
			"error" : null,
			"loading" : true
		}
	}else if(action.type === "FETCH_MOVIE_SUCCESS"){
		return {
			...state,
			"movies" : action.payload,
			"loading" : false
		}

	}else if(action.type === "FETCH_MOVIE_FAILURE"){
		return {
			...state,
			"error" : action.payload,
			"loading" : false
		}
	}else{
		return state;
	}  
}

export default function useMovieSearch(){
	const [state, dispatch] = useReducer(reducerFunc, initialState);

	const fetchMoviesFunc = () => {
		dispatch({
			"type" : "FETCH_MOVIE_REQUEST"			
		});

		const date = new Date();
		const url = "https://imdb236.p.rapidapi.com/api/imdb/search?primaryTitleAutocomplete="+state.movieName+"&type=movie&rows=25&sortOrder=ASC&sortField=id&time="+date.getTime();	

		const requestConfig = {
			"headers": {
		    	"x-rapidapi-host": "imdb236.p.rapidapi.com",
		    	"x-rapidapi-key": "94afd7eb28mshe44cffb31930cb6p14b211jsn7b2c8149e2ec"
		  	}
		}

		return new Promise((resolve, reject)=>{
			$.ajax({
				...requestConfig,
				"url" : url,
				"type" : "GET",
				"success" : function(data){
					const movieList = data["results"];									
					resolve(movieList);					
				},
				"error" : function(xhr, status, error){					
					reject(error);					
				}
			});	
		});

		
	};

	return {
		"movieName" : 	state["movieName"],
		"movies" : 		state["movies"],
		"loading" : 	state["loading"],
		"error" : 		state["error"],
		"setMovieName" : function(movieName){			
			dispatch({
				"type" : "SET_MOVIE_NAME",
				"payload" : movieName
			});
		},
		"setMovieList" : function(movies){			
			dispatch({
				"type" : "FETCH_MOVIE_SUCCESS",
				"payload" : movies
			});
		},
		"setError" : function(error){			
			dispatch({
				"type" : "FETCH_MOVIE_FAILURE",
				"payload" : error		
			});
		},
		"fetchMovies" : fetchMoviesFunc
	}
}