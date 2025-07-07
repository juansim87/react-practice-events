import { useState } from "react";
import "./FocusInput.css";

export const FocusInput = () => {
	const [focus, setFocus] = useState(false);

	const handleFocus = () => {
		setFocus(true);
	};

	const handleBlur = () => {
		setFocus(false);
	};

	return (
		<div>
			<h2>Caja con hover</h2>
			<input
				type="text"
				className={`focus-input ${focus ? "focus" : "no-focus"}`}
				onFocus={handleFocus}
				onBlur={handleBlur}
                placeholder= {!focus ? "Haz foco" : "Quita el foco"}
			/>
		</div>
	);
};
