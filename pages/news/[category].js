import React from "react";

const ArticleListByCategory = ({ articles, category }) => {
	return (
		<>
			<h1>
				Showing news for category <i>{category}</i>
			</h1>
			{articles.map((article) => {
				return (
					<div key={article.id}>
						<h2>
							{article.id} {article.title}
						</h2>
						<p>{article.description}</p>
						<hr />
					</div>
				);
			})}
		</>
	);
};

export default ArticleListByCategory;

export async function getServerSideProps(context) {
	const {
		req,
		res,
		query,
		params: { category },
	} = context;
	console.log(
		"🚀 ~ file: [category].js:32 ~ getServerSideProps ~ req:",
		req.headers.cookie
	);
	res.setHeader("Set-Cookie", ["name=Mohsen"]);
	console.log(
		"🚀 ~ file: [category].js:33 ~ getServerSideProps ~ query:",
		query
	);
	const response = await fetch(
		`http://localhost:4000/news?category=${category}`
	);
	const data = await response.json();
	return {
		props: {
			articles: data,
			category,
		},
	};
}
