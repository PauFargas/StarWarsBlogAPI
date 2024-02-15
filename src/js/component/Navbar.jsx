import React, { useContext } from "react";
import { Link } from "react-router-dom";
import  {Context}  from "../store/appContext.js";



export const Navbar = () => {

  const{ store, actions} = useContext(Context);
  

    return (
		<nav className="navbar navbar-expand-lg" style={{backgroundColor : "#272B30"}}>
  <div className="container-fluid">
   <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png" alt="" style={{height : "60px"}} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/" style={{color : "white"}}>Home</Link>
        <Link className="nav-link" to="characters" style={{color : "white"}}>Characters</Link>
        <Link className="nav-link" to="planets" style={{color : "white"}}>Planets</Link>
		<Link className="nav-link" to="starships" style={{color : "white"}}>Starships</Link>
		<div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <span>Favorites</span>
    {store.favorites.length > 0 && (
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ marginTop: '12px' }}>
        {store.favorites.length}
        <span className="visually-hidden">unread messages</span>
      </span>
    )}
  </button>
			<ul className="dropdown-menu">
        {store.favorites.map((favorite, index) => (
          <li key={index}>{favorite}
          <i className="fas fa-trash-alt ms-3" onClick={()=>{actions.removeFavorites(favorite)}}></i>
          </li>
        ))}
      </ul>
   
		</div>

        
      </div>
    </div>
  </div>
</nav>
	  )
	  }