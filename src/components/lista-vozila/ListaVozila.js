import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./stil.css";

const ListaVozila = () => {
	const [vozila, setVozila] = useState([]);
	const navigate = useNavigate();
	const [deleted, setDeleted] = useState(false);

	useEffect(() => {
		async function popisVozila() {
			const url = process.env.REACT_APP_API + "vozila";
			console.log(url);
			const res = await fetch(url);
			const vozila = await res.json();
			setVozila(vozila);
		}
		popisVozila();
	}, [deleted]);

	const handleDelete = async (id) => {
		const url = process.env.REACT_APP_API + "delete/" + id;
		const res = await fetch(url, {
			method: "delete",
		});
		setDeleted(true);
	};

	return vozila ? (
		<table id="tablica">
			<thead>
				<tr>
					<th>ID</th>
					<th>Marka</th>
					<th>Naziv</th>
					<th>Detalji</th>
				</tr>
			</thead>

			<tbody>
				{vozila.map((v) => {
					return (
						<tr key={v.id}>
							<td>{v.id}</td>
							<td>{v.marka}</td>
							<td>{v.naziv}</td>
							<td>
								<div className="actionButtons">
									<button
										className="button"
										onClick={() => navigate(`/detalji/${v.id}`)}
									>
										Detalji
									</button>
									<button
										className="button"
										onClick={() => navigate(`/uredi/${v.id}`)}
									>
										Uredi
									</button>
									<button className="button" onClick={() => handleDelete(v.id)}>
										Briši
									</button>
								</div>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	) : (
		<div>Nema vozila.</div>
	);
};

export default ListaVozila;
