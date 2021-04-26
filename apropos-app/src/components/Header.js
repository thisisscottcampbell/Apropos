import React from 'react';

const Header = ({ user, setUser }) => {
	const handleClick = () => setUser('');

	return (
		<div>
			<p>Welcome, {user}!</p>
			<button onClick={handleClick}>Log Out</button>
		</div>
	);
};

export default Header;
