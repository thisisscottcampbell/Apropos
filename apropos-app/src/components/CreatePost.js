import React, { useState, useRef } from 'react';

const CreatePost = ({ user, handleAddPost }) => {
	const [content, setContent] = useState('');
	const [image, setImage] = useState(null);
	const imgRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		const post = { content, image, user };
		handleAddPost(post);
		setContent('');
		imgRef.current.value = '';
	};

	return (
		<div>
			<h2>Create New Post</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Add Post Content"
					onChange={(e) => setContent(e.target.value)}
					value={content}
				/>
				<input type="file" onChange={(e) => setImage(e.target.files[0])} />
				<button type="submit">Submit Post</button>
			</form>
			<p>{content}</p>
			{image && (
				<img
					style={{ height: 100, width: 200, objectFit: 'cover' }}
					src={URL.createObjectURL(image)}
					ref={imgRef}
				/>
			)}
		</div>
	);
};

export default CreatePost;
