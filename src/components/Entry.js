import React from "react";

export default function Entry(props) {
	console.log(props.id);

	let textInputs = props.text.map((field) => {
		return (
			<div>
				<label for={field}>{field[0]}</label>
				<input
					onChange={(event) => props.updatePreview(event)}
					name={field[0]}
					type="text"
					for={field[1]}
					id={props.id}
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
