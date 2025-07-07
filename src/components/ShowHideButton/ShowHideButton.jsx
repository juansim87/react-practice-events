import { useState } from "react";

export const ShowHideButton = () => {
	const [text, setText] = useState(false);

	const handleToggle = () => {
		setText(!text);
	};

	return (
		<>
			<div>
				<h2>Botón de ocultar y mostrar</h2>
				<button onClick={handleToggle}>{text ? "Ocultar texto" : "Mostrar texto"}</button>
				<p>{text ? "Este texto aparece y desaparece" : ""}</p>
			</div>
		</>
	);
};
