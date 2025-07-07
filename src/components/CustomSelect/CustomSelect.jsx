import { useState } from "react";

export const CustomSelect = () => {
	const [selection, setSelection] = useState("");

	const handleSelect = (event) => {
		setSelection(event.target.value);
	};

	return (
		<div>
			<h2>Selector personalizado</h2>
			<select onChange={handleSelect}>
				<option defaultValue={""}>Elige a tu Pokemon inicial</option>
				<option value={"bulbasaur"} style={{ color: "green" }}>
					Bulbasaur
				</option>
				<option value={"squirtle"} style={{ color: "blue" }}>
					Squirtle
				</option>
				<option value={"charmander"} style={{ color: "red" }}>
					Charmander
				</option>
			</select>
			{/* <p>Tu Pokémon inicial es: {selection}</p> */}
			<p
				style={{
					color:
						selection === "bulbasaur"
							? "green"
							: selection === "squirtle"
							? "blue"
							: selection === "charmander"
							? "red"
							: "black",
				}}
			>
				{selection !== ""
					? `Tu Pokémon inicial es: ${selection.charAt(0).toUpperCase() + selection.slice(1)}`
					: "Elige tu Pokémon inicial"}
			</p>
		</div>
	);
};
