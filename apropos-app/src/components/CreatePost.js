import React, { useState } from 'react';

const CreatePost = ({ user }) => {
	const [content, setContent] = useState('');
	const [image, setImage] = useState(null);

	return (
		<div>
			<h2>Create New Post</h2>
			<form>
				<input
					type="text"
					placeholder="Add Post Content"
					onChange={(e) => setContent(e.target.value)}
				/>
				<input type="file" onChange={(e) => setImage(e.target.files[0])} />
				<button type="submit">Submit Post</button>
			</form>
			<p>{content}</p>
			{image && (
				<img
					style={{ height: 100, width: 200, objectFit: 'cover' }}
					src={URL.createObjectURL(image)}
				/>
			)}
		</div>
	);
};

export default CreatePost;
