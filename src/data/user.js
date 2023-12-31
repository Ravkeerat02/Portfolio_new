const INFO = {
	main: {
		title: "Portfolio",
		name: "Ravkeerat Singh",
		email: "ravkeerat_singh@outlook.com",
		phone: "+1(647)-928-9905",
		location: "Toronto, Ontario",
	},

	socials: {
		github: "https://github.com/Ravkeerat02",
		linkedin: "https://www.linkedin.com/in/ravkeerat-singh/",
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
				Enthusiastic recent graduate in Front-End Development, equipped
				with hands-on experience in React, JavaScript, and responsive
				design. Adept at crafting visually appealing and user-friendly
				interfaces. Eager to contribute innovative solutions and grow in
				a dynamic team environment.
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
	education: [
		{
			degree: "Advanced Diploma - Computer Programming & Analaysis",
			school: "George Brown College",
			graduationYear: "2023",
		},
		{
			certification: "Foundation of Cyber Security",
			issuer: "Google ",
			link: "Link to Certification (if applicable)",
		},
	],
	projects: [
		{
			title: "Time Master Application",
			description:
				"Web based application which can be used by employees as well as the employer to manage time of requests and approvals , manage the schedules and along with that stay updated with the latest news.",
			linkText: "Time Master Application",
			Github: "https://github.com/Ravkeerat02/Capstone-code",
			link: "https://time-master.herokuapp.com/",
		},

		{
			title: "Quote Generator ",
			description:
				"Developed a webpage application that generates quotes and allows sharing on Twitter, translation into multiple languages, and text-to-speech functionality. ",
			linkText: "Quote Generator ",
			Github: "https://github.com/Ravkeerat02/Quote-generator",
			link: "https://ravkeerat02.github.io/Quote-generator/",
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
		{
			title: "Spotify Clone",
			description:
				"Web based application which allows the user to play and search for the music and also to upload and udpoate their favourite songs.",
			linkText: "Spotify Clone",
			Github: "https://github.com/Ravkeerat02/SpotifyClone",
			link: "https://github.com/Ravkeerat02/SpotifyClone",
		},
	],
};

export default INFO;
