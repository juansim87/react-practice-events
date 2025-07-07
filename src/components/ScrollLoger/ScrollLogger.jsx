import "./ScrollLogger.css";

export const ScrollLogger = () => {
	const handleScroll = () => {
		console.log("Scroll detectado");
	};

	return (
		<div>
			<h2>Logger de Scroll</h2>
			<div className="large-box" onScroll={handleScroll}></div>
		</div>
	);
};
