import React from 'react';
import './App.css';
import ListaVozila from './components/lista-vozila/ListaVozila';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PodaciOVozilu from './components/podaci-o-vozilu/PodaciOVozilu';
import UnosVozila from './components/unos-vozila/UnosVozila';
import UrediVozilo from './components/uredi-vozilo/UrediVozilo';

function App() {
	return (
		<BrowserRouter>
			<div>
				<nav id="nav">
					<ul>
						<li>
							<a href="/vozila">Popis vozila</a>
						</li>
						<li>
							<a href="/novo-vozilo">Novo vozilo</a>
						</li>
					</ul>
				</nav>
			</div>
			<Routes>
				<Route path="/" element={<ListaVozila />} />
				<Route path="/vozila" element={<ListaVozila />} />
				<Route path="/detalji/:id" element={<PodaciOVozilu />} />
				<Route path="/novo-vozilo" element={<UnosVozila />} />
				<Route path="/uredi/:id" element={<UrediVozilo />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
