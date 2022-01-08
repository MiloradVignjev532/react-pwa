import { useEffect, useState } from "react";
import "../lista-vozila/stil.css";
const { useParams } = require("react-router-dom");

const PodaciOVozilu = () => {
	let { id } = useParams();
	const [detalji, setDetalji] = useState({});

	useEffect(() => {
		async function podaciOVozilu() {
			const url = process.env.REACT_APP_API + "detalji/" + id;
			console.log(url);
			const res = await fetch(url);
			const detalji = await res.json();
			setDetalji(detalji);
		}
		podaciOVozilu();
	}, [id]);
	return detalji ? (
		<table id="tablica">
			<tr>
				<td>Marka:</td>
				<td> {detalji[0]?.marka}</td>
			</tr>
			<tr>
				<td>Naziv:</td>
				<td>{detalji[0]?.naziv}</td>
			</tr>
			<tr>
				<td>Godina proizvodnje:</td>
				<td>{detalji[0]?.godina_proizvodnje}</td>
			</tr>
			<tr>
				<td>Snaga motora:</td>
				<td> {detalji[0]?.snaga_motora}</td>
			</tr>
			<tr>
				<td>Prosjecna potrosnja:</td>
				<td>{detalji[0]?.prosjecna_potrosnja}</td>
			</tr>
			<tr>
				<td>CO2:</td>
				<td>{detalji[0]?.co2}</td>
			</tr>
			<tr>
				<td>Tip mjenjaca:</td>
				<td>{detalji[0]?.tip_mjenjaca}</td>
			</tr>
			<tr>
				<td>Broj vrata:</td>
				<td>{detalji[0]?.broj_vrata}</td>
			</tr>
			<tr>
				<td>Motor:</td>
				<td>{detalji[0]?.motor}</td>
			</tr>
		</table>
	) : (
		<div>Nema podataka o vozilu.</div>
	);
};

export default PodaciOVozilu;
