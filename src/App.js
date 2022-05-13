import "./App.css";
import Entry from "./components/Entry";

function App() {
	return (
		<div>
			<h1 className="header">CV Project </h1>;
			<div className="main">
				<div className="entry">
					<section className="personal">
						<Entry
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
					<section className="preview-personal"></section>

					<section className="preview-experience"></section>

					<section className="preview-education"></section>
				</div>
			</div>
		</div>
	);
}

export default App;
