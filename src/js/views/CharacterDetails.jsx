import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext.js";
import{ Spinner } from "../component/Spinner.jsx";
import { Link } from "react-router-dom";

export const CharacterDetails = ()=>{
    const {store, actions} = useContext(Context)
    const params = useParams();
    

    useEffect(() => {
        actions.getCharacterDetails(params.idCharacter);
        console.log("Current Character:", store.currentCharacter);
        console.log("Name:", store.currentCharacter?.properties?.name);
    }, []);


//params.idCharacters


    return(
        
        <div className="container">
            <div>
               { !store.currentCharacter.properties?
               <Spinner/>
               :
               <h1>{store.currentCharacter.properties.name}</h1>}         
            </div>
            <div className="card mb-3" style={{}}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src= {`https://starwars-visualguide.com/assets/img/characters/${store.currentCharacter.uid}.jpg`} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{store.currentCharacter.properties? store.currentCharacter.properties.name : "N/A" }</h5>
                <p className="card-text"><strong>Height: </strong>{store.currentCharacter.properties?store.currentCharacter.properties.height : <Spinner /> } cm</p>
                <p className="card-text"><strong>Mass: </strong>{store.currentCharacter.properties?store.currentCharacter.properties.mass : <Spinner /> }</p>
                <p className="card-text"><strong>Hair color: </strong>{store.currentCharacter.properties?store.currentCharacter.properties.hair_color : <Spinner /> }</p>
                <p className="card-text"><strong>Skin color: </strong>{store.currentCharacter.properties?store.currentCharacter.properties.skin_color : <Spinner /> }</p>
                <p className="card-text"><strong>Eye color: </strong>{store.currentCharacter.properties?store.currentCharacter.properties.eye_color : <Spinner /> }</p>
                <p className="card-text"><strong>Birthday: </strong>{store.currentCharacter.properties?store.currentCharacter.properties.birth_year : <Spinner /> }</p>
                <p className="card-text"><strong>Gender: </strong> {store.currentCharacter.properties?store.currentCharacter.properties.gender : <Spinner /> }</p>                                   
            </div>
            </div>
        </div>
        </div>
        <div className="d-flex justify-content-center">
            <Link to={"/characters"} className="btn btn-warning">Back to characters</Link>       
        </div>   
            
        </div>

        
    )
}