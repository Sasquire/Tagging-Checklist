const css_string = require('./style.css');
const { add_style } = require('./../dependencies/add_style.js');

function remove_toJSON () {
	delete Object.prototype.toJSON;
	delete Date.prototype.toJSON;
	delete String.prototype.toJSON;
	delete Array.prototype.toJSON;
	delete Number.prototype.toJSON;
}

function init_css () {
	add_style(css_string);
}

function init_html () {
	document.getElementById('content').innerHTML += `
	<table id="record_table">
		<thead>
			<tr>
				<td>Section Title</td>
				<td>Section Buttons</td>
			</tr>
		</thead>
		<tbody id="record_table_body"></tbody>
	</table>
	`;
}

function init_everything () {
	init_html();
	remove_toJSON();
	init_css();
}

module.exports = {
	everything: init_everything
};
