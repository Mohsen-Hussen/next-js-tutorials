import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	// const router = useRouter();
	// const handleClick = () => {
	// 	router.push("/product");
	// };
	return (
		<>
			<div className={styles.grid}>
				<h1>Home Page</h1>
				<Link href="/users">Users </Link>
				<Link href="/posts">Posts </Link>
				{/* <button onClick={handleClick}>Place Order</button> */}
			</div>
		</>
	);
}
