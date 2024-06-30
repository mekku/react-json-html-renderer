import "./JsonRenderer.css";

export type JsonRendererTypes = {
	data: any;
};

const JsonRenderer = ({ data }: JsonRendererTypes) => {
	if (!data) return null;

	if (Array.isArray(data)) {

		if (data.some(item => typeof item !== "object")) {
			// Render list
			return <div className="json-list">
				{data.map((item, i) => <div key={i}><JsonRenderer data={item} /></div>)}
			</div>
		}

		// Render table
		let keys = [] as any[];
		for (let item of data) {
			let itemKeys = Object.keys(item);
			keys = [...keys, ...itemKeys];
		}

		// Unique key
		keys = keys.filter((x, i) => i === keys.indexOf(x));

		return <table className="json-list-table">
			<thead>
				<tr>{keys.map(key => <th key={key}>{key}</th>)}</tr>
			</thead>

			<tbody>
				{data.map((item, i) => <tr key={i}>
					{keys.map(key => {
						let value = item[key];
						return <td key={key}><JsonRenderer data={value} /></td>
					})}
				</tr>)}
			</tbody>
		</table>
	}
	else if (typeof data == "object") {
		let entries = Object.entries(data);

		return <table className="json-data-table">
			{entries.map(([key, value]: any) => {
				return <tr>
					<th>{key}</th>
					<td><JsonRenderer data={value as any} /></td>
				</tr>
			})}
		</table>
	}

	try {
		return data.toString();
	}
	catch (e) {
		return "";
	}
};

export default JsonRenderer;
