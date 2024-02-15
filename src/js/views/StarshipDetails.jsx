import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext.js";
import{ Spinner } from "../component/Spinner.jsx";
import { Link } from "react-router-dom";

export const StarshipDetails = ()=>{
    const {store, actions} = useContext(Context)
    const params = useParams();
    

    useEffect(() => {
        actions.getStarshipDetails(params.idStarship);
        console.log("Current Starship:", store.currentStarship);
        console.log("Name:", store.currentStarship?.properties?.name);
    }, []);


//params.idCharacters


    return(
        
        <div className="container">
            <h1>{params.idStarship}</h1>
            <div>
               { !store.currentStarship.properties?
               <Spinner/>
               :
               <h1>{store.currentStarship.properties.name}</h1>}         
            </div>
            <div className="card mb-3" style={{}}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src= {`https://starwars-visualguide.com/assets/img/starships/${store.currentStarship.uid}.jpg`} className="img-fluid rounded-start" alt="..." styles={{max_height : "368px"}}/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{store.currentStarship.properties? store.currentStarship.properties.name : "N/A" }</h5>
                <p className="card-text"><strong>Model: </strong>{store.currentStarship.properties?store.currentStarship.properties.model : <Spinner /> } cm</p>
                <p className="card-text"><strong>Class: </strong>{store.currentStarship.properties?store.currentStarship.properties.starship_class : <Spinner /> }</p>
                <p className="card-text"><strong>Manufacturer: </strong>{store.currentStarship.properties?store.currentStarship.properties.manufacturer : <Spinner /> }</p>
                <p className="card-text"><strong>Cost in Credits: </strong>{store.currentStarship.properties?store.currentStarship.properties.cost_in_credits : <Spinner /> }</p>
                <p className="card-text"><strong>Crew: </strong>{store.currentStarship.properties?store.currentStarship.properties.crew: <Spinner /> }</p>
                <p className="card-text"><strong>Passengers: </strong>{store.currentStarship.properties?store.currentStarship.properties.passengers : <Spinner /> }</p>
                <p className="card-text"><strong>Cargo capacity: </strong> {store.currentStarship.properties?store.currentStarship.properties.cargo_capacity : <Spinner /> }</p>
                <p className="card-text"><strong>Pilots: </strong> {store.currentStarship.properties?store.currentStarship.properties.pilots : <Spinner /> }</p> 
                                                    
            </div>
            </div>
        </div>
        </div>
        <div className="d-flex justify-content-center">
            <Link to={"/starships"} className="btn btn-warning">Back to starships</Link>       
        </div>   
            
        </div>

        
    )
}