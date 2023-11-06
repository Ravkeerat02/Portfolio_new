import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";
import Skills from "../components/about/skills";
import INFO from "../data/user";
import SEO from "../data/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<div className="bg-gray-100 min-h-screen mt-10 ">
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<NavBar active="about" />

			<div className="container mx-auto py-8 px-4 md:py-16 md:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
					<div className="about-right-side">
						<h1
							className="text-4xl md:text-5xl font-bold mb-4"
							dangerouslySetInnerHTML={{
								__html: INFO.about.title,
							}}
						></h1>
						<p className="text-lg mb-6">{INFO.about.description}</p>
						<Skills />
					</div>

					<div className="about-left-side">
						{/* Your image code here */}
						<div className="mt-8">
							<Socials />
						</div>
					</div>
				</div>

				<div className="mt-8">
					<a
						href="/RavkeeratSinghCV_2.pdf"
						download="RavkeeratSinghCV_2.pdf"
						className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
					>
						<span>Download Resume</span>
						<FontAwesomeIcon icon={faDownload} className="ml-2" />
					</a>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default About;
