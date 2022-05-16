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
import { isContentEditable } from "@testing-library/user-event/dist/utils";

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

	let [personaldata, setPersonalData] = React.useState([
		{
			name: "Kevin McPeak",
			email: "kmcpeak46@gmail.com",
			address: "Pittsburgh",
			phone: "12343",
			id: uniqid(),
		},
		{
			name: "Ava Dava",
			email: "avagmail.gmail.com",
			address: "saintclar",
			phone: "23832",
			id: uniqid(),
		},
	]);

	let personal = personaldata.map((item) => {
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
	console.log(personaldata);

	function updatePreview(event) {
		setPersonalData((prevData) =>
			prevData.map((item) => {
				return event.target.id === item.id
					? { ...item, [event.target.name]: event.target.value }
					: item;
			})
		);
	}

	let personalEntry = personaldata.map((item) => {
		return (
			<div>
				<Entry
					key={item.id}
					text={Object.entries(item)}
					entryHeader="Personal"
					id={item.id}
					updatePreview={updatePreview}
				/>
			</div>
		);
	});

	return (
		<div>
			<h1 className="header">CV Project </h1>;
			<div className="main">
				<div className="entry"></div>
				<div>{personalEntry}</div>
				<div className="preview">
					<div className="preview-container">{personal}</div>
				</div>
			</div>
		</div>
	);
}

export default App;
