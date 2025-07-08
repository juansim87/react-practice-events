import { useState } from "react";

export const EditText = () => {
	const [edit, setEdit] = useState(false);
	const [text, setText] = useState("Este texto es editable");

	const switchInput = () => {
		setEdit(true);
	};

	const textEdition = (event) => {
		setText(event.target.value);
	};

	const handleBlur = () => {
		setEdit(false);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			setEdit(false);
		}
	};

	return (
		<div>
			<h2>Texto editable</h2>
			{edit ? (
				<input type="text" value={text} onChange={textEdition} onBlur={handleBlur} 
                onKeyDown={handleKeyDown}

                />
			) : (
				<p onDoubleClick={switchInput}>{text}</p>
			)}
		</div>
	);
};
