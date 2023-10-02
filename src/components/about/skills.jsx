// Skills.jsx
import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { DiMongodb, DiNodejs } from "react-icons/di"; // Icons for MongoDB and Node.js
import "./styles/skills.css";

const Skills = () => {
	return (
		<div className="skills-section">
			<h2>Front-End Development Skills</h2>
			<div className="skill">
				<FaHtml5 className="skill-icon" />
				<span>HTML5</span>
			</div>
			<div className="skill">
				<FaCss3 className="skill-icon" />
				<span>CSS3</span>
			</div>
			<div className="skill">
				<FaJs className="skill-icon" />
				<span>JavaScript</span>
			</div>
			<div className="skill">
				<FaReact className="skill-icon" />
				<span>React.js</span>
			</div>
			<div className="skill">
				<DiMongodb className="skill-icon" />
				<span>MongoDB</span>
			</div>
			<div className="skill">
				<DiNodejs className="skill-icon" />
				<span>Node.js</span>
			</div>
			{/* Add more skills as needed */}
		</div>
	);
};

export default Skills;
