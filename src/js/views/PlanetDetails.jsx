import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router";
import { Spinner } from "../component/Spinner.jsx";
import { Link } from "react-router-dom";

export const PlanetDetails = () =>{
    const {store, actions} = useContext(Context)
    const params = useParams()
    useEffect(()=>{
        actions.getPlanetDetails(params.idPlanets)
    },[])

    return(
        <div className="container">
        
        <div>
           { !store.currentPlanet.properties?
           <Spinner/>
           :
           <h1>{store.currentPlanet.properties.name}</h1>}         
        </div>
        <div className="card mb-3" style={{}}>
    <div className="row g-0">
        <div className="col-md-4">
        <img src= {`https://starwars-visualguide.com/assets/img/planets/${store.currentPlanet.uid}.jpg`} className="img-fluid rounded-start" alt="..." styles={{max_height : "368px"}}/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">{store.currentPlanet.properties? store.currentPlanet.properties.name : "N/A" }</h5>
            <p className="card-text"><strong>Diameter: </strong>{store.currentPlanet.properties?store.currentPlanet.properties.diameter : <Spinner /> } cm</p>
            <p className="card-text"><strong>Rotation Period: </strong>{store.currentPlanet.properties?store.currentPlanet.properties.rotation_period : <Spinner /> }</p>
            <p className="card-text"><strong>Orbital Period: </strong>{store.currentPlanet.properties?store.currentPlanet.properties.orbital_period : <Spinner /> }</p>
            <p className="card-text"><strong>Gravity: </strong>{store.currentPlanet.properties?store.currentPlanet.properties.gravity : <Spinner /> }</p>
            <p className="card-text"><strong>Population: </strong>{store.currentPlanet.properties?store.currentPlanet.properties.population: <Spinner /> }</p>
            <p className="card-text"><strong>Climate: </strong>{store.currentPlanet.properties?store.currentPlanet.properties.climate : <Spinner /> }</p>
            <p className="card-text"><strong>Terrain: </strong> {store.currentPlanet.properties?store.currentPlanet.properties.terrain : <Spinner /> }</p>
            <p className="card-text"><strong>Surface Water: </strong> {store.currentPlanet.properties?store.currentPlanet.properties.surface_water : <Spinner /> }</p> 
                                                
        </div>
        </div>
    </div>
    </div>
    <div className="d-flex justify-content-center">
        <Link to={"/planets"} className="btn btn-warning">Back to planets</Link>
    </div>   
        
    </div>


    )
}