import React from "react";
import { useRouter } from "next/router";

const ProductDetail = () => {
	const router = useRouter();
	const productid = router.query.productid;
	return <div>ProductDetail about product {productid}</div>;
};

export default ProductDetail;
