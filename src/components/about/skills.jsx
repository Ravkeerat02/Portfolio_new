import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { DiMongodb, DiNodejs } from "react-icons/di";

import "./styles/skills.css";

const Skills = () => {
	const frontEndSkills = [
		{ icon: <FaHtml5 />, name: "HTML5" },
		{ icon: <FaCss3 />, name: "CSS3" },
		{ icon: <FaJs />, name: "JavaScript" },
		{ icon: <FaReact />, name: "React.js" },
	];

	const backEndSkills = [
		{ icon: <DiMongodb />, name: "MongoDB" },
		{ icon: <DiNodejs />, name: "Node.js" },
	];

	return (
		<div className="skills-section">
			<h2>Front-End Development Skills</h2>
			<div className="skills-row">
				{frontEndSkills.map((skill, index) => (
					<div className="skill" key={index}>
						{skill.icon}
						<span>{skill.name}</span>
					</div>
				))}
			</div>
			<h2>Back-End Development Skills</h2>
			<div className="skills-row">
				{backEndSkills.map((skill, index) => (
					<div className="skill" key={index}>
						{skill.icon}
						<span>{skill.name}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
