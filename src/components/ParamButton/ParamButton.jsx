import { useState } from "react";

export const ParamButton = () => {
	
    const nameList = ["Alarico", "Witerico", "Recesvinta"];

    const [greeting, setGreeting] = useState("");

	const showGreeting = (name) => {
        if (name === "Alarico") {
            setGreeting(`¡Hola ${name}!`);
        }
        if (name === "Witerico") {
            setGreeting(`¡Buenas ${name}!`);           
        }
        if (name=== "Recesvinta") {
            setGreeting(`¡Bienvenida ${name}!`);           
            
        }

	};

	return (
		<div>
			<h2>Botón con parámetros</h2>
			<ul>
				{nameList.map((item) => (
					<li key={item}>
						Saluda a {item} <button onClick={() => showGreeting(item)}>Mostrar saludo</button>
					</li>
				))}
			</ul>
			<p>{greeting}</p>
		</div>
	);
};
