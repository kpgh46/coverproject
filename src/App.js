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
	});
	console.log(data.first);

	// let [first, setFirst] = React.useState("");

	function updateFirst(event) {
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
							updateFirst={updateFirst}
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
							entryHeader="Experience"
							text={["Company Name", "Role", "City"]}
						/>
					</section>

					<section className="education">
						<Entry
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
						<div>First Name: {data.first}</div>
						<div>LastName: {data.last}</div>
						<div>Email: {data.email}</div>
						<div>Address: {data.address}</div>
						<div>Phone: {data.phone}</div>
					</section>

					<section className="preview-experience"></section>

					<section className="preview-education"></section>
				</div>
			</div>
		</div>
	);
}

export default App;
