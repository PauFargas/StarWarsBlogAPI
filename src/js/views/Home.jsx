import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => (
	<div className="text-center mt-5">
		
		<h1>Hello there!</h1>
		<p>
			<img src="https://media.vandalsports.com/i/1200x675/5-2022/2022527163744_1.jpg"/>
		</p>		
		
	</div>
);
