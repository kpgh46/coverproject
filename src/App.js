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
import { format, parseISO } from "date-fns";
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

	let pData = {
		name: "Kevin McPeak",
		email: "kmcpeak46@gmail.com",
		address: "Pittsburgh",
		phone: "12343",
		id: uniqid(),
	};

	let [personalData, setPersonalData] = React.useState(
		JSON.parse(localStorage.getItem("personalData") || JSON.parse([pData]))
	);

	React.useEffect(() => {
		localStorage.setItem("personalData", JSON.stringify(personalData));
	}, [personalData]);

	let [experienceData, setExperienceData] = React.useState([
		{
			role: "Network Enablement Lead",
			company: "SAP",
			description:
				"-Manage several global projects by collaborating with buyers in effort to onboard over 80% of their suppliers onto the Ariba Network platform \n-Partner with key stakeholders from the implementation phase to go-live and continue to provide support to ensure best practices are followed and enablement activity is ongoing \n-Analyze reports and deliver weekly project statuses to the buyer with customized action plans based on their unique program and deliverable objectives\n-Forecast enablement activity using data analytics to build and design programs that meet the buyers’ business goals and align with their resource allocation",
			from: "2020-05-17",
			to: "2022-05-18",
			id: uniqid(),
		},
		{
			role: "Product Specialist",
			company: "M*Modal",
			description:
				"-Managed over 30 Fluency Direct clients in successfully deploying speech recognition software and maintaining customer satisfaction by meeting needs at both an administrative and end user levels \n-Trained end users and support staff on Fluency Direct through at-the-elbow lessons and classroom presentations either remotely or onsite \n -Analyzed utilization reports and proactively anticipate customer needs resulting in an increased adoption rate of over 70% and additional licenses and services sold \n-Collaborated with various teams including different levels of support, development, quality assurance, and product management in order to ensure customer satisfaction ",
			from: "2020-05-17",
			to: "2022-05-18",
			id: uniqid(),
		},
	]);

	let [educationData, setEducationData] = React.useState([
		{
			university: "Pennsylvania State University",
			major: "Bachelor's Degree in Business Administration",
			description:
				"-Major: Bachelor's Degree in Business Administration \n-Minor: Marketing",
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
		let from = parseISO(item.from);
		let to = parseISO(item.to);
		return (
			<section className="preview-experience">
				<div className="dates">
					<h2>
						{item.company}, <span>{item.role}</span>
					</h2>
					<div>
						<div>
							{format(from, "MMM,dd,yyyy")} -
							{format(to, "MMM,dd,yyyy")}
						</div>
					</div>
				</div>

				<div className="details">{item.description}</div>
			</section>
		);
	});
	let educationPreview = educationData.map((item) => {
		let from = parseISO(item.from);
		let to = parseISO(item.to);
		return (
			<section className="preview-experience">
				<div className="dates">
					<h2>{item.university}</h2>
					<div>
						<div>
							{format(from, "MMM,dd,yyyy")} -
							{format(to, "MMM,dd,yyyy")}
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
			to: "2020-05-17",
			from: "2020-05-17",
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
			to: "2020-05-17",
			from: "2020-05-17",
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
