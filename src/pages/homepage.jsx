import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import INFO from "../data/user";
import SEO from "../data/seo";

const Homepage = () => {
	const [logoSize, setLogoSize] = useState(80);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);
			let newLogoSize = 80 - (scroll * 4) / 10;
			setLogoSize(newLogoSize > 40 ? newLogoSize : 40);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<div className="min-h-screen bg-gray-100 text-gray-800 font-sans ">
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<NavBar active="home" className="pr-8" />

			<div className="container mx-auto py-12 px-4">
				<div className="bg-white rounded-lg shadow-lg p-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						<div>
							<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
								{INFO.homepage.title}
							</h1>
							<p className="text-base md:text-lg lg:text-xl mb-6">
								{INFO.homepage.description}
							</p>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Homepage;
