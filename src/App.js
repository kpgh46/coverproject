import "./App.css";
import React from "react";
import Entry from "./components/Entry";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
	let [data, setData] = React.useState({
		name: "Kevin McPeak",
		email: "kevmc46@gmail.com",
		address: "Pittsburgh Pennsylvania",
		phone: "4123203548",
		company: "",
		role: "",
		city: "",
		university: "",
		major: "",
		minor: "",
		degree: "",
		gpa: "",
	});
	console.log(data.first);

	// let [first, setFirst] = React.useState("");

	function updatePreview(event) {
		setData((prevFormData) => {
			return {
				...prevFormData,
				[event.target.name]: [event.target.value],
			};
		});
	}

	function upper(word) {
		return word.toUpperCase();
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
							text={["Company Name", "Role", "City"]}
						/>
					</section>

					<section className="education">
						<Entry
							updateFirst={updatePreview}
							entryHeader="Education"
							text={[
								"University",
								"Major",
								"Minor",
								"Degree",
								"GPA",
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
								<div>{data.email}</div>
								<div>Address: {data.address}</div>
								<div>Phone: {data.phone}</div>
							</div>
						</section>

						{/* <section className="preview-experience">
                  <div>Company: {data.company}</div>
                  <div>Role: {data.role}</div>
                  <div>City: {data.city}</div>
                </section>

                <section className="preview-education">
                  <div>University: {data.university}</div>
                  <div>Major: {data.major}</div>
                  <div>Minor: {data.minor}</div>
                  <div>Degree: {data.degree}</div>
                  <div>GPA: {data.gpa}</div>
                </section> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
