import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div>
			<h1 className="header">CV Project </h1>;
			<div className="main">
				<div className="entry">
					<section className="personal"></section>

					<section className="experience"></section>

					<section className="education"></section>
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
