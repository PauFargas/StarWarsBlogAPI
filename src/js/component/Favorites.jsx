import React, {useContext} from "react";
import { Context } from "../store/appContext.js";


export const Favorites = () =>{
    const {store, actions} = useContext(Context)


    {/*const handleAdd = () =>{
    actions.setFavorites();*/}
    

    const handleRemove = () => {actions.removeFavorites()}

    
        

    return (
        <div className="container">
            <h1>Favorites</h1>
            {/*<button onClick={handleAdd}>Agregar</button>*/}
            <button onClick={handleRemove}>Desagregar</button>
            {/*<button onClick={handleGetDetails}>Detalles</button>*/}

        </div>
    )
}