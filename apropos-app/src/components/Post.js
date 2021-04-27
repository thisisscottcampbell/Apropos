import React from 'react';

const Post = ({ content, image, user, i }) => {
	return (
		<>
			<div key={i}>
				{image && (
					<img
						stlye={{ height: 100, width: 200, objectFit: 'cover' }}
						src={URL.createObjectURL(image)}
						alt=""
					/>
				)}
			</div>
			<p>{content}</p>
			<div>{user}</div>
		</>
	);
};

export default Post;
