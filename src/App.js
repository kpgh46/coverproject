import "./App.css";
import uniqid from "uniqid";
import React from "react";
import Entry from "./components/Entry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faPhone,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
// import { isContentEditable } from "@testing-library/user-event/dist/utils";

function App() {
	const mailIcon = (
		<FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "5px" }} />
	);
	const phoneIcon = (
		<FontAwesomeIcon icon={faPhone} style={{ marginRight: "5px" }} />
	);
	const locationIcon = (
		<FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "5px" }} />
	);

	//////////////////////////////////////////////////////

	let [personalData, setPersonalData] = React.useState([
		{
			name: "Kevin McPeak",
			email: "kmcpeak46@gmail.com",
			address: "Pittsburgh",
			phone: "12343",
			id: uniqid(),
		},
	]);

	let [experienceData, setExperienceData] = React.useState([
		{
			role: "Software Engineer",
			company: "SAP",
			description: "blah blah blah",
			from: "2020-05-17",
			to: "2022-05-18",
			id: uniqid(),
		},
	]);

	let [educationData, setEducationData] = React.useState([
		{
			university: "Pennsylvania State University",
			major: "Bachelor's Degree in Business Administration",
			description: "Education blah blah blah",
			from: "2006-05-17",
			to: "2011-05-18",
			id: uniqid(),
		},
	]);

	let personalPreview = personalData.map((item) => {
		return (
			<section className="preview-personal">
				<div className="name">{item.name}</div>
				<div className="contact-info">
					<div style={{ marginRight: "10px" }}>
						{mailIcon}
						{item.email}
					</div>
					<div style={{ marginRight: "10px" }}>
						{locationIcon}
						{item.address}
					</div>
					<div style={{ marginRight: "10px" }}>
						{phoneIcon}
						{item.phone}
					</div>
				</div>
			</section>
		);
	});

	let experiencePreview = experienceData.map((item) => {
		return (
			<section className="preview-experience">
				<div className="dates">
					<h2>
						{item.company}, <span>{item.role}</span>
					</h2>
					<div>
						<div>
							{item.from}-{item.to}
						</div>
					</div>
				</div>

				<div className="details">{item.description}</div>
			</section>
		);
	});
	let educationPreview = educationData.map((item) => {
		return (
			<section className="preview-experience">
				<div className="dates">
					<h2>{item.university}</h2>
					<div>
						<div>
							{item.from}-{item.to}
						</div>
					</div>
				</div>
				<div className="details">{item.description}</div>
			</section>
		);
	});

	function updatePreview(event, type) {
		type((prevData) =>
			prevData.map((item) => {
				return event.target.id === item.id
					? { ...item, [event.target.name]: event.target.value }
					: item;
			})
		);
	}

	let personalEntry = personalData.map((item) => {
		return (
			<div>
				<Entry
					text={Object.entries(item)}
					entryHeader="Personal"
					id={item.id}
					updatePreview={updatePreview}
					key={item.id}
					removeSection={removeSection}
					setData={setPersonalData}
				/>
			</div>
		);
	});

	let experienceEntry = experienceData.map((item) => {
		return (
			<div>
				<Entry
					text={Object.entries(item)}
					entryHeader="Experience"
					id={item.id}
					updatePreview={updatePreview}
					key={item.id}
					removeSection={removeSection}
					setData={setExperienceData}
				/>
			</div>
		);
	});
	let educationEntry = educationData.map((item) => {
		return (
			<div>
				<Entry
					text={Object.entries(item)}
					entryHeader="Education"
					id={item.id}
					updatePreview={updatePreview}
					key={item.id}
					removeSection={removeSection}
					setData={setEducationData}
				/>
			</div>
		);
	});

	function addExperience() {
		let newSection = {
			role: "",
			company: "",
			description: "",
			to: "",
			from: "",
			id: uniqid(),
		};

		setExperienceData((oldData) => {
			return [...oldData, newSection];
		});
	}
	function addEducation() {
		let newSection = {
			university: "",
			major: "",
			description: "",
			to: "",
			from: "",
			id: uniqid(),
		};

		setEducationData((oldData) => {
			return [...oldData, newSection];
		});
	}

	function removeSection(event, id, type) {
		event.stopPropagation();

		type((oldData) =>
			oldData.filter((item) => {
				return item.id !== id;
			})
		);
	}

	return (
		<div>
			<h1 className="header">CV Project </h1>;
			<div className="main">
				<div className="entry">
					<div>{personalEntry}</div>
					<div>
						{experienceEntry}
						<button onClick={addExperience}>Add Experience</button>
					</div>
					<div>
						{educationEntry}
						<button onClick={addEducation}>Add Education</button>
					</div>
				</div>
				<div className="preview">
					<div className="preview-container">
						<div>{personalPreview}</div>
						<br></br>
						<h3>EDUCATION:</h3>

						<div>{educationPreview}</div>
						<br></br>
						<h3>EXPERIENCE:</h3>
						<div>{experiencePreview}</div>
						<br></br>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
