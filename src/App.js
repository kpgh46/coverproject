import "./App.css";
import Personal from "./components/Personal";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
	return (
		<div>
			<h1 className="header">CV Project </h1>;
			<div className="main">
				<div className="entry">
					<section className="personal">
						<Personal />
					</section>

					<section className="experience">
						<Experience />
					</section>

					<section className="education">
						<Education />
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
