import "./ErrorImage.css";

export const ErrorImage = () => {
	return (
		<div>
			<h2>Imagen de error</h2>
			<div className="image-box">
				<img
					src="/src/assets/images/raton-mohicano.webp"
					onError={(event) =>
						(event.target.src = "https://miro.medium.com/v2/resize:fit:1200/1*MXyMqcEJ6Se0SCWcYCKZTQ.jpeg")
					}
				/>
			</div>
		</div>
	);
};
