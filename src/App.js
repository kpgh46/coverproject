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

	let [personalData, setpersonalData] = React.useState([
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
				<h2>{item.role}</h2>
				<h3>{item.company}</h3>
				<div className="details">{item.description}</div>
			</section>
		);
	});

	function updatePreview(event) {
		setpersonalData((prevData) =>
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
					removePersonal={removePersonal}
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
					removePersonal={removePersonal}
				/>
			</div>
		);
	});

	function addPersonal() {
		let newSection = {
			name: "",
			email: "",
			address: "",
			phone: "",
			id: uniqid(),
		};

		setpersonalData((oldData) => {
			return [...oldData, newSection];
		});
	}

	function removePersonal(event, id) {
		event.stopPropagation();

		setpersonalData((oldData) =>
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
					<div>
						{personalEntry}
						<button onClick={addPersonal}>Add Personal</button>
					</div>
					<div>
						{experienceEntry}
						<button onClick={addPersonal}>Add Experience</button>
					</div>
				</div>
				<div className="preview">
					<div className="preview-container">
						<div>{personalPreview}</div>
						<div>{experiencePreview}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
