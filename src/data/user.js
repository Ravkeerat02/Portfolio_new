const INFO = {
	main: {
		title: "Online Portfolio",
		name: "Ravkeerat Singh",
		email: "ravkeerat_singh@outlook.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/Ravkeerat02",
		linkedin: "https://www.linkedin.com/in/ravkeerat-singh/",
		behance: "https://www.behance.net/ravkeeratsingh",
	},

	homepage: {
		title: (
			<h1 style={{ fontSize: "36px", color: "#333" }}>
				<strong>Ravkeerat Singh's Portfolio</strong>
			</h1>
		),
		description: (
			<p
				style={{
					fontFamily: "Arial, sans-serif",
					fontSize: "18px",
					color: "#555",
				}}
			>
				I am an aspiring software developer with a strong foundation in
				the front-end stack, specifically the MERN stack. My passion for
				technology and commitment to learning drive me to pursue a
				career in software development. I am equipped with the necessary
				skills and knowledge to create visually appealing and
				user-friendly web applications. With a focus on front-end
				technologies such as HTML, CSS, JavaScript, and proficiency in
				frameworks like React, I am eager to contribute to innovative
				projects and continue honing my expertise in the ever-evolving
				world of software development.
			</p>
		),
	},
	about: {
		title: "About Me",
		description: (
			<p
				style={{
					fontFamily: "Arial, sans-serif",
					fontSize: "18px",
					color: "#333",
				}}
			>
				I'm <strong>Ravkeerat Singh</strong>, a recent graduate deeply
				passionate about technology and design. My aim is to be a
				skilled full-stack developer, specializing in the{" "}
				<strong style={{ color: "blue" }}>
					MERN stack (MongoDB, Express.js, React, Node.js)
				</strong>
				. I'm prepared to overcome challenges and craft engaging,
				user-friendly websites and applications. Join me on this
				thrilling journey of innovation and meaningful impact.
			</p>
		),
	},
	projects: [
		{
			title: "Time Master Application - Simplifying Employee Time Management",
			description: `• Created a user-friendly application enabling employees to view schedules, clock in/out, request time off, and update passwords.
			• Implemented manager functionalities for employee management, schedule updates, and announcements.`,
			linkText: "Time Master Application",
			Github: "https://github.com/Ravkeerat02/Capstone-code",
			link: "https://time-master.herokuapp.com/",
		},

		{
			title: "Quote Generator - A Simple Quote Generator",
			description:
				"Developed a webpage application that generates quotes and allows sharing on Twitter, translation into multiple languages, and text-to-speech functionality. ",
			linkText: "Quote Generator ",
			Github: "https://github.com/Ravkeerat02/Quote-generator",
			link: "https://ravkeerat02.github.io/Quote-generator/",
		},
		{
			title: "Buzz Chat - Web Applcation",
			description:
				"BuzzChat is a dynamic web application currently in development, designed to provide a seamless chatting experience. It serves as a platform to showcase my skills and contribute to real-time communication technology.",
			linkText: "Buzz Chat",
			Github: "https://github.com/Ravkeerat02/BuzzChat",
			link: "https://github.com/Ravkeerat02/BuzzChat",
		},
		{
			title: "CarHub ",
			description:
				"Carhub is a web application for exploring and comparing different car models. It provides a user-friendly interface for searching, sorting, and filtering car listings, as well as detailed information about each car.",
			linkText: "CarHub",
			Github: "https://github.com/Ravkeerat02/CarHub",
			link: "https://car-hub-nine-rust.vercel.app/",
		},
		{
			title: "AI Text Summarizer",
			description:
				"Web based application which uses GPT4 based AI to summarize artciles baseed on the link provided",
			linkText: "AI text summarizer",
			Github: "https://github.com/Ravkeerat02/AI-Text",
			link: "https://ai-text-six.vercel.app/",
		},
	],
};

export default INFO;
