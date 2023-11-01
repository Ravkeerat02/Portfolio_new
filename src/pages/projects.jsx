import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import INFO from "../data/user";
import SEO from "../data/seo";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<div className="bg-gray-100 min-h-screen">
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			{/* <div className="bg-gray-800 text-white py-2"> */}
			<div className="container mx-auto">
				<h1 className="text-2xl md:text-3xl font-bold">
					Projects I've Worked On
				</h1>
			</div>
			{/* </div> */}

			<NavBar active="projects" />

			<div className="container mx-auto py-12 px-4">
				<div className="text-center mb-8">
					<p className="text-lg mt-4">
						Welcome to my world of MERN stack projects! I'm
						constantly crafting innovative web solutions with
						MongoDB, Express, React, and Node.js. Join me on this
						exciting journey of learning and growth as we explore
						the limitless potential of these technologies. Stay
						tuned for more exciting developments!
					</p>
				</div>

				<div className="text-center mb-8">
					<a
						href="https://github.com/ravkeerat02"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
					>
						<FontAwesomeIcon icon={faGithub} className="mr-2" />
						Explore More on GitHub
					</a>
				</div>

				<div className="overflow-x-auto">
					<table className="min-w-full table-auto border-collapse border border-gray-300">
						<tbody>
							<AllProjects />
						</tbody>
					</table>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Projects;
