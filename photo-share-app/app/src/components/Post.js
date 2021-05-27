import React from 'react';
import { UserContext, PostContext } from '../App';

function Post({ image, content, user, id }) {
	const currentUser = React.useContext(UserContext);
	const { dispatch } = React.useContext(PostContext);
	const isCurrentUser = currentUser === user;

	const handleDelete = () => {
		dispatch({ type: 'DELETE_POST', payload: { id } });
	};

	return (
		<>
			{image && (
				<img
					style={{ height: 100, width: 200, objectFit: 'cover' }}
					src={URL.createObjectURL(image)}
					alt="Post cover"
				/>
			)}
			<p>{content}</p>
			<div style={{ color: isCurrentUser && 'green' }}>{user}</div>
			{isCurrentUser && <button onClick={handleDelete}>Delete</button>}
		</>
	);
}

export default Post;
