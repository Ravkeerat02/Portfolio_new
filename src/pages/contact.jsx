import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faPhone,
	faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-container">
						<div className="title contact-title">
							Let's Connect!
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for visiting my website! Whether you want
							to discuss a project, ask a question, or just say
							hello, I'd love to hear from you.
						</div>
						<br></br>
						<div className="contact-options">
							<div className="contact-option">
								<FontAwesomeIcon
									icon={faEnvelope}
									className="contact-icon"
								/>
								<span>
									Email:{" "}
									<a href={`mailto:${INFO.main.email}`}>
										{INFO.main.email}
									</a>
								</span>
							</div>

							<div className="contact-option">
								<FontAwesomeIcon
									icon={faPhone}
									className="contact-icon"
								/>
								<span>Phone: {INFO.main.phone}</span>
							</div>

							<div className="contact-option">
								<FontAwesomeIcon
									icon={faMapMarker}
									className="contact-icon"
								/>
								<span>Location: {INFO.main.location}</span>
							</div>
						</div>
					</div>
				</div>

				<div className="page-footer">
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
