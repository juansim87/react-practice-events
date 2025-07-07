import { useState } from "react";
import "./HoverBox.css"

export const HoverBox = () => {
	const [active, setActive] = useState(false);

	const handleMouseEnter = () => {
		setActive(true);
	};

	const handleMouseLeave = () => {
		setActive(false);
	};

	return (
		<div>
			<h2>Caja con hover</h2>
			<div className= {`hover-box ${active ? "active": "not-active"}`}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><p>Caja con color cambiante</p></div>
		</div>
	);
};
