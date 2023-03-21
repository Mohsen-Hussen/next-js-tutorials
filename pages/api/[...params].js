export default function handler(req, res) {
	const params = req.query.params;
	console.log("🚀 ~ file: [...params].js:3 ~ handler ~ params:", params);
	res.status(200).json(params);
}
