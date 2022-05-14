import "./App.css";
import React from "react";
import Entry from "./components/Entry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faPhone,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function App() {
	let [data, setData] = React.useState({
		name: "Kevin McPeak",
		email: "kevmc46@gmail.com",
		address: "Pittsburgh Pennsylvania",
		phone: "4123203548",
		role: "Software Developer",
		company: "SAP",
		city: "Pittsburgh",
		university: "Pennsylvania State University",
		location: "Erie, PA",
		major: "Bachelor's Degreen Business Administration",
		minor: "",
		degree: "",
		gpa: "",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ex nisl. Duis sed euismod risus. Integer tristique pretium nunc vitae sagittis.",
	});
	console.log(data.first);

	const mailIcon = (
		<FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "5px" }} />
	);
	const phoneIcon = (
		<FontAwesomeIcon icon={faPhone} style={{ marginRight: "5px" }} />
	);
	const locationIcon = (
		<FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "5px" }} />
	);

	// let [first, setFirst] = React.useState("");

	function updatePreview(event) {
		setData((prevFormData) => {
			return {
				...prevFormData,
				[event.target.name]: [event.target.value],
			};
		});
	}

	return (
		<div>
			<h1 className="header">CV Project </h1>;
			<div className="main">
				<div className="entry">
					<section className="personal">
						<Entry
							updateFirst={updatePreview}
							entryHeader="Personal"
							text={["Name", "Email", "Address", "Phone"]}
						/>
					</section>

					<section className="experience">
						<Entry
							updateFirst={updatePreview}
							entryHeader="Experience"
							text={[
								"Role",
								"Company Name",
								"City",
								"Description",
							]}
						/>
						<button>Add Experience</button>
					</section>

					<section className="education">
						<Entry
							updateFirst={updatePreview}
							entryHeader="Education"
							text={[
								"University",
								"Location",
								"Major",
								"Minor",
								"Degree",
								"GPA",
								"Description",
							]}
						/>
					</section>
				</div>

				<div className="preview">
					<div className="preview-container">
						<section className="preview-personal">
							<br></br>
							<div className="name">{data.name}</div>
							<div className="contact-info">
								<div style={{ marginRight: "10px" }}>
									{mailIcon}
									{data.email}
								</div>
								<div style={{ marginRight: "10px" }}>
									{locationIcon}
									{data.address}
								</div>
								<div style={{ marginRight: "10px" }}>
									{phoneIcon}
									{data.phone}
								</div>
							</div>
						</section>

						<section className="preview-experience">
							<h2>Experience</h2>
							<h3>{data.role}</h3>
							<div className="details">
								<div>{data.company}</div>
								<div>{data.city}</div>
							</div>
							<div>{data.description}</div>
						</section>

						<section className="preview-education">
							<h2>Education</h2>
							<h3>{data.major}</h3>
							<div className="details">
								<div>{data.university}</div>
								<div>{data.degree}</div>
							</div>
							<div>{data.description}</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
