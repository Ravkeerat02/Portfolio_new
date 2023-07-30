import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";


import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={50} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Projects I've Worked On
						</div>

						<div className="subtitle projects-subtitle">
						Welcome to my projects section! Here, I showcase captivating applications built on the dynamic MERN stack – MongoDB, Express, React, and Node.js. These cutting-edge technologies fuel my passion for crafting seamless and innovative web solutions. Explore my work here and on GitHub to see the exciting projects that represent my journey of continuous learning and growth. Let's embark on this coding adventure together, powered by the possibilities of the MERN stack!
						</div>
						

						<div className="github-link">
							<a
								href="https://github.com/ravkeerat02"
								target="_blank"
								rel="noopener noreferrer"
							>
								Explore More on GitHub
							</a>
						</div>


						<div className="projects-list">
							<AllProjects />
						</div>

						
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
