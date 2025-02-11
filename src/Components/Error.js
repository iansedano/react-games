function Error({ children }) {
	return (
		<>
			<h1>There has been an error!</h1>
			<p>{children}</p>
		</>
	);
}

export default Error;
