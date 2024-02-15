import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const Starships = ()=> {
    const{ store, actions} = useContext(Context);
    const handleAdd = (item) =>{
        actions.setFavorites(item);
    }


    return(
        <div className="row  row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-5 m-2">
            {store.starships.map((item, index)=>{
                const urlImage ="https://starwars-visualguide.com/assets/img/starships/";
                const handleErrorImage = (event) =>{
                    event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                }
                return (
                <div className="container my-2 mx-0">
                    <div className="card" style={{width : "18rem"}}>
                        <img src={`${urlImage}${item.uid}.jpg`} className="card-img-top" alt="..." onError={handleErrorImage}/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <Link to={`/starships/${item.uid}`} className="btn btn-primary">Details</Link>
                            <button  className="btn btn-outline-warning" style={{marginLeft : "113px"}} onClick={()=>handleAdd(item.name)}><i className="far fa-heart fa-lg"></i></button>
                        </div>
                        </div>
                </div>
                
                )

            })}
        </div>
    )
}