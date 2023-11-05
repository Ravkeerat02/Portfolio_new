import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
	const { icon, title, body } = props;
	return (
		<div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4 p-4">
			<div className="flex items-center mb-2">
				<div className="card-icon mr-5">
					<FontAwesomeIcon
						icon={icon}
						className="text-blue-500 text-2xl"
					/>
				</div>
				<div className="card-title text-xl font-semibold">{title}</div>
			</div>
			<div className="card-body">
				<ul className="list-disc list-inside text-gray-700">
					{body.map((point, index) => (
						<li key={index} className="mb-2">
							{point}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Card;
