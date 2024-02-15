const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			favorites : [],
			characters : [],
			planets : [],
			starships: [],
			currentCharacter: {},
			currentStarship: {},
			currentPlanet: {},
		},
		actions: {
			// Use getActions to call a function within a fuction
			setFavorites: (item) => {
				const store = getStore(); 
				setStore({ favorites: [...store.favorites, item] });  
			},
			removeFavorites : (name) =>{
				const store = getStore();
				setStore({favorites : store.favorites.filter((item, id)=> {return item != name} )})

			},


			getCharacters : async () => {
				const url = "https://www.swapi.tech/api/" + "people";
				const options = {method : 'GET'};
				const response = await fetch(url, options)
				if(response.ok){
					const data = await response.json();
					//console.log(data)					
					setStore({characters : data.results})
					
				}else{
					console.log('Error retrieving people: ', response.status, response.statusText)
				}
			},
			getPlanets : async () => {
				const url = "https://www.swapi.tech/api/" + "planets/";
				const options = {method : 'GET'};
				const response = await fetch(url, options)
				if(response.ok){
					const data = await response.json()
					//console.log("Planets Retrieved Succesfully");
					//console.log(data)					
					setStore({planets : data.results})
					
				}else{
					console.log('Error retrieving planets: ', response.status, response.statusText)
				}
			},
			getStarships : async () => {
				const url = "https://www.swapi.tech/api/" + "starships/";
				const options = {method : 'GET'};
				const response = await fetch(url, options)
				if(response.ok){
					const data = await response.json()
					//console.log("Starships Retrieved Succesfully");
					//console.log(data)
					//console.log(data.message)
					//console.log(data.results)
					setStore({starships : data.results})
					
				}else{
					console.log('Error retrieving starships: ', response.status, response.statusText)
				}
			},
			getCharacterDetails : async (id)=>{
				const url = "https://www.swapi.tech/api/" +"people/" + id;
				console.log(url)
				const options ={
					method : 'GET'
				};
				const response = await fetch(url, options);
				
				if (response.ok){
					const data = await response.json();
					console.log("data", data)					
					console.log ("data.message", data.message)
					console.log ("data.result: ", data.result);
					console.log("description: ", data.result.description)
					console.log("Properties: ", data.result.properties)
					setStore({currentCharacter : data.result})
					

				}else{
					console.log("Error retrieving Details: ", response.status, response.statusText);
				}

			},
			getStarshipDetails : async (id) => {
				const url = "https://www.swapi.tech/api/" +"starships/" + id;
				console.log(url)
				const options ={
					method : 'GET'
				};
				const response = await fetch(url, options);
				
				if (response.ok){
					const data = await response.json();
					console.log("data", data)					
					console.log ("data.message", data.message)
					console.log ("data.result: ", data.result);
					console.log("description: ", data.result.description)
					console.log("Properties: ", data.result.properties)
					setStore({currentStarship : data.result})
					

				}else{
					console.log("Error retrieving Details: ", response.status, response.statusText);
				}

			},
			getPlanetDetails : async (id)=>{
				const url = "https://www.swapi.tech/api/" +"planets/" + id;
				console.log(url)
				const options ={
					method : 'GET'
				};
				const response = await fetch(url, options);
				
				if (response.ok){
					const data = await response.json();
					console.log("data", data)					
					console.log ("data.message", data.message)
					console.log ("data.result: ", data.result);
					console.log("description: ", data.result.description)
					console.log("Properties: ", data.result.properties)
					setStore({currentPlanet : data.result})
					

				}else{
					console.log("Error retrieving Planet Details: ", response.status, response.statusText);
				}

			},

		}
	};
};

export default getState;
