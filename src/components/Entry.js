import React from "react";

export default function Entry(props) {
	let textInputs = props.text.map((field) => {
		return (
			<div>
				<label for={field}>{field}</label>
				<input
					onChange={props.updateFirst}
					name={field.split(" ")[0].toLowerCase()}
					type="text"
					for={field}
				></input>
			</div>
		);
	});

	return (
		<div>
			<h4 className="entry-header">{props.entryHeader}</h4>
			<div className="entry-section">
				<form>{textInputs}</form>
			</div>
		</div>
	);
}
