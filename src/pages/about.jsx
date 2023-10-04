import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
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

	const handleDownload = () => {
		// Create a temporary anchor element
		const downloadLink = document.createElement("a");

		// Set the href attribute to the path of your resume file
		downloadLink.href = "/resume.pdf"; // Update this to the correct path of your resume file

		// Set the download attribute to specify the file name
		downloadLink.download = "RavkeeratSinghCV_1.pdf"; // Update the file name as desired

		// Append the anchor element to the DOM
		document.body.appendChild(downloadLink);

		// Programmatically trigger a click event on the anchor element
		downloadLink.click();

		// Remove the anchor element from the DOM
		document.body.removeChild(downloadLink);
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
								<Skills />
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										{/* <img
											src="about.jpg"
											alt="about"
											className="about-image"
										/> */}
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>

					<a
						class="btn line-btn-dark btn-icon btn-radius"
						href="/RavkeeratSinghCV_1.pdf"
						title="CV"
						download="RavkeeratSinghCV_1.pdf"
					>
						<span>Download Resume</span>
						<FontAwesomeIcon icon={faDownload} />
					</a>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
