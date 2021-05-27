import React from 'react';
import { UserContext } from '../App';

const Post = ({ content, image, user }) => {
	const currentUser = React.useContext(UserContext);
	console.log(currentUser);
	const isCurrentUser = currentUser === user;

	return (
		<>
			{image && (
				<img
					stlye={{ height: 100, width: 200, objectFit: 'cover' }}
					src={URL.createObjectURL(image)}
					alt=""
				/>
			)}
			<p>{content}</p>
			<div style={{ color: isCurrentUser && 'green' }}>{user}</div>
		</>
	);
};

export default Post;
