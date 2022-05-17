import React from "react";

export default function Entry(props) {
	let fields = props.text.filter((item) => {
		return item[0] !== "id";
	});

	let textInputs = fields.map((field) => {
		return (
			<div>
				<label for={field}>{field[0]}</label>
				<input
					onChange={(event) => props.updatePreview(event)}
					name={field[0]}
					type="text"
					for={field[1]}
					id={props.id}
					value={field[1]}
				></input>
			</div>
		);
	});

	return (
		<div>
			<h4 className="entry-header">{props.entryHeader}</h4>
			<div className="entry-section">
				<form>{textInputs}</form>
				<button
					onClick={(event) => props.removePersonal(event, props.id)}
				>
					Delete
				</button>
			</div>
		</div>
	);
}
