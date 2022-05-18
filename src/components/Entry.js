import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";

export default function Entry(props) {
	let fields = props.text.filter((item) => {
		return (
			item[0] !== "id" &&
			item[0] !== "to" &&
			item[0] !== "from" &&
			item[0] !== "description"
		);
	});

	let textInputs = fields.map((field) => {
		return (
			<div>
				<label for={field}>{field[0]}</label>
				<input
					onChange={(event) =>
						props.updatePreview(event, props.setData)
					}
					name={field[0]}
					type="text"
					for={field[1]}
					id={props.id}
					value={field[1]}
				></input>
			</div>
		);
	});

	let dates = props.text.filter((item) => {
		return item[0] === "to" || item[0] === "from";
	});

	let dateInputs = dates.map((item) => {
		return (
			<div>
				<label for={item}>{item[0]}</label>
				<input
					onChange={(event) =>
						props.updatePreview(event, props.setData)
					}
					type="date"
					name={item[0]}
					for={item[1]}
					id={props.id}
					value={item[1]}
				></input>
			</div>
		);
	});

	let description = props.text.filter((item) => {
		return item[0] === "description";
	});

	let descriptionInputs = description.map((text) => {
		return (
			<div>
				<label for={text}>{text[0]}</label>
				<textarea
					onChange={(event) =>
						props.updatePreview(event, props.setData)
					}
					for={text[1]}
					name={text[0]}
					id={props.id}
					value={text[1]}
				></textarea>
			</div>
		);
	});

	return (
		<div>
			<h4 className="entry-header">{props.entryHeader}</h4>
			<div className="entry-section">
				<form>
					{textInputs}
					{dateInputs}
					{descriptionInputs}
				</form>
				{props.entryHeader !== "Personal" ? (
					<button
						onClick={(event) =>
							props.removeSection(event, props.id, props.setData)
						}
					>
						Delete
					</button>
				) : (
					""
				)}
			</div>
		</div>
	);
}
