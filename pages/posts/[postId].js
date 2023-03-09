import React from "react";

const Post = ({ post }) => {
	return (
		<>
			<h2>
				{post.id} {post.title}
			</h2>
			<p>{post.body}</p>
		</>
	);
};

export default Post;

export async function getStaticPaths() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	const posts = await response.json();
	const paths = posts.map((post) => ({
		params: { postId: `${post.id}` },
	}));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const { params } = context;
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.postId}`
	);
	const data = await response.json();
	return {
		props: {
			post: data,
		},
		revalidate: 10,
	};
}