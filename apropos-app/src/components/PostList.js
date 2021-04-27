import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
	const renderPosts = () => posts.map((post, i) => <Post key={i} {...post} />);

	return <div>{renderPosts}</div>;
};

export default PostList;
