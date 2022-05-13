import React from "react";

export default function Entry(props) {
	let textInputs = props.text.map((field) => {
		return (
			<div>
				<label for={field}>{field}</label>
				<input type="text" placeholder="test" for={field}></input>
			</div>
		);
	});

	return (
		<div>
			<h2 className="entry-header">{props.entryHeader}</h2>
			<div className="entry-section">
				<form>{textInputs}</form>
			</div>
		</div>
	);
}
