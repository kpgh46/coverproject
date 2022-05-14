import "./App.css";
import React from "react";
import Entry from "./components/Entry";

function App() {
	let [data, setData] = React.useState({
		first: "sdf",
		last: "",
		email: "",
		address: "",
		phone: "",
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

	return (
		<div>
			<h1 className="header">CV Project </h1>;
			<div className="main">
				<div className="entry">
					<section className="personal">
						<Entry
							updateFirst={updatePreview}
							entryHeader="Personal"
							text={[
								"First Name",
								"Last Name",
								"Email",
								"Address",
								"Phone",
							]}
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
					<section className="preview-personal">
						<br></br>
						<div>First Name: {data.first}</div>
						<div>LastName: {data.last}</div>
						<div>Email: {data.email}</div>
						<div>Address: {data.address}</div>
						<div>Phone: {data.phone}</div>
					</section>

					<section className="preview-experience">
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
					</section>
				</div>
			</div>
		</div>
	);
}

export default App;
