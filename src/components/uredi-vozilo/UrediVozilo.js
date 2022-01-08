import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../unos-vozila/stil.css";

const UrediVozilo = () => {
	let { id } = useParams();
	const [marka, setMarka] = useState();
	const [naziv, setNaziv] = useState();
	const [god_pro, setGodPro] = useState();
	const [snaga_motora, setSnagaMotora] = useState();
	const [prosj_pot, setProsjPotr] = useState();
	const [co2, setCo2] = useState();
	const [tip_mjenjaca, setTipMjenjaca] = useState();
	const [broj_vrata, setBrojVrata] = useState();
	const [motor, setMotor] = useState();

	useEffect(() => {
		async function getVozilo() {
			const url = process.env.REACT_APP_API + "vozilo/" + id;
			const url1 = process.env.REACT_APP_API + "vozilo-detalji/" + id;
			const res = await fetch(url);
			const resJson = await res.json();
			const resDet = await fetch(url1);
			const resDetalji = await resDet.json();
			//

			setMarka(resJson[0].marka);
			setNaziv(resJson[0].naziv);
			setGodPro(resDetalji[0].godina_proizvodnje);
			setSnagaMotora(resDetalji[0].snaga_motora);
			setProsjPotr(resDetalji[0].prosjecna_potrosnja);
			setCo2(resDetalji[0].co2);
			setTipMjenjaca(resDetalji[0].tip_mjenjaca);
			setBrojVrata(resDetalji[0].broj_vrata);
			setMotor(resDetalji[0].motor);
		}
		getVozilo();
	}, [id]);

	const handleSubmit = async (e) => {
		const vozilo = {
			marka: marka,
			naziv: naziv,
			godina_proizvodnje: god_pro,
			snaga_motora: snaga_motora,
			prosjecna_potrosnja: prosj_pot,
			co2: co2,
			tip_mjenjaca: tip_mjenjaca,
			broj_vrata: broj_vrata,
			motor: motor,
		};
		e.preventDefault();
		const url = process.env.REACT_APP_API + "uredi-vozilo/" + id;
		const res = await fetch(url, {
			method: "POST",
			body: JSON.stringify(vozilo),
			headers: {
				"Content-Type": "application/json",
			},
		});
		console.log(res);
	};
	return (
		<div className="forma">
			<h2>Uredi vozilo</h2>
			<form onSubmit={handleSubmit}>
				<label for="marka">Marka:</label>
				<br />
				<input
					type="text"
					id="marka"
					name="marka"
					onChange={(e) => setMarka(e.target.value)}
					value={marka}
				/>
				<br />
				<label for="naziv">Naziv:</label>
				<br />
				<input
					type="text"
					id="naziv"
					name="naziv"
					value={naziv}
					onChange={(e) => setNaziv(e.target.value)}
				/>
				<br />
				<label for="god_pro">Godina proizvodnje:</label>
				<br />
				<input
					type="text"
					id="god_pro"
					name="god_pro"
					value={god_pro}
					onChange={(e) => setGodPro(e.target.value)}
				/>
				<br />
				<label for="snaga_motora">Snaga motora:</label>
				<br />
				<input
					type="text"
					id="snaga_motora"
					name="snaga_motora"
					value={snaga_motora}
					onChange={(e) => setSnagaMotora(e.target.value)}
				/>
				<br />
				<label for="prosj_pot">Prosječna potrošnja:</label>
				<br />
				<input
					type="text"
					id="prosj_pot"
					name="prosj_pot"
					value={prosj_pot}
					onChange={(e) => setProsjPotr(e.target.value)}
				/>
				<br />
				<label for="co2">CO2:</label>
				<br />
				<input
					type="text"
					id="co2"
					name="co2"
					value={co2}
					onChange={(e) => setCo2(e.target.value)}
				/>
				<br />
				<label for="tip_mjenjaca">Tip mjenjača:</label>
				<br />
				<input
					type="text"
					id="tip_mjenjaca"
					name="tip_mjenjaca"
					value={tip_mjenjaca}
					onChange={(e) => setTipMjenjaca(e.target.value)}
				/>
				<br />
				<label for="broj_vrata">Broj vrata:</label>
				<br />
				<input
					type="text"
					id="broj_vrata"
					name="broj_vrata"
					value={broj_vrata}
					onChange={(e) => setBrojVrata(e.target.value)}
				/>
				<br />
				<label for="motor">Motor:</label>
				<br />
				<input
					type="text"
					id="motor"
					name="motor"
					value={motor}
					onChange={(e) => setMotor(e.target.value)}
				/>
				<br />
				<button type="submit" className="submitButton">
					Spremi promjene
				</button>
			</form>
		</div>
	);
};

export default UrediVozilo;
