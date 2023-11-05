import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

const Socials = () => {
	return (
		<div className="mb-8">
			<h2 className="text-2xl font-semibold mb-4">Connect with me on</h2>
			<div className="flex items-center mb-4">
				<div className="mr-4">
					<FontAwesomeIcon
						icon={faGithub}
						className="text-3xl text-gray-600"
					/>
				</div>
				<div>
					<a
						href={INFO.socials.github}
						target="_blank"
						rel="noreferrer"
						className="text-blue-500 hover:underline"
					>
						Follow on GitHub
					</a>
				</div>
			</div>
			<div className="flex items-center mb-4">
				<div className="mr-4">
					<FontAwesomeIcon
						icon={faLinkedin}
						className="text-3xl text-blue-600"
					/>
				</div>
				<div>
					<a
						href={INFO.socials.linkedin}
						target="_blank"
						rel="noreferrer"
						className="text-blue-500 hover:underline"
					>
						Follow on LinkedIn
					</a>
				</div>
			</div>
			<div className="flex items-center">
				<div className="mr-4">
					<FontAwesomeIcon
						icon={faEnvelope}
						className="text-3xl text-green-500"
					/>
				</div>
				<div>
					<a
						href={`mailto:${INFO.main.email}`}
						className="text-green-500 hover:underline"
					>
						{INFO.main.email}
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
