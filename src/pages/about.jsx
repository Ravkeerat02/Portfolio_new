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
import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<div className="about-page">
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>
			<NavBar active="about" />
			<div className="content-wrapper">
				<div className="about-container">
					<div className="about-main">
						<div className="about-right-side">
							<h1
								className="about-title"
								dangerouslySetInnerHTML={{
									__html: INFO.about.title,
								}}
							></h1>
							<p className="about-subtitle">
								{INFO.about.description}
							</p>
							<Skills />
						</div>
						<div className="about-left-side">
							{/* Your image code here */}
							<div className="about-socials">
								<Socials />
							</div>
						</div>
					</div>
					<div className="about-socials-mobile">
						<Socials />
					</div>
				</div>
			</div>
			<a
				className="btn line-btn-dark btn-icon btn-radius download-btn"
				href="/RavkeeratSinghCV_1.pdf"
				title="CV"
				download="RavkeeratSinghCV_1.pdf"
			>
				<span>Download Resume</span>
				<FontAwesomeIcon icon={faDownload} />
			</a>
			<Footer />
		</div>
	);
};

export default About;
