import React, { useState } from 'react';

const Login = ({ setUser }) => {
	const [input, setInput] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setUser(input);
	};

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<input
					onChange={(e) => setInput(e.target.value)}
					placeholder="Input username"
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Login;
