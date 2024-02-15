import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import "bootswatch/dist/slate/bootstrap.min.css";
// TODO: Note: Replace ^[theme]^ (examples: darkly, slate, cosmo, spacelab, and superhero. See https://bootswatch.com/ for current theme names.

//Import Views
import { Home } from "./views/Home.jsx";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Characters } from "./views/Characters.jsx";
import { Planets } from "./views/Planets.jsx"
import { CharacterDetails } from "./views/CharacterDetails.jsx";
import { NotFound } from "./views/NotFound.jsx";

//

import injectContext from "./store/appContext";

//

//Import components
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
import { Favorites } from "./component/Favorites.jsx";
import { Starships } from "./views/Starships.jsx";
import { StarshipDetails } from "./views/StarshipDetails.jsx";
import { PlanetDetails } from "./views/PlanetDetails.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/favorites" element={<Favorites />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<NotFound />} />
						<Route path="/characters" element={< Characters />} />
						<Route path="/characters/:idCharacter" element={< CharacterDetails />} />
						<Route path="/starships/:idStarship" element={< StarshipDetails />} />
						<Route path="/planets" element={< Planets />} />
						<Route path="/starships" element={< Starships />} />
						<Route path="/planets/:idPlanets" element={<PlanetDetails/>}/>
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
