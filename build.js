const browserify = require('browserify');
const stringify = require('stringify');
const path = require('path');
const fs = require('fs');
const source = require('./source/version.json');
const { performance } = require('perf_hooks');
const apply_header = require('./dependencies/prepend-text.js');

build_version('complete');

function read_json (path) {
	return JSON.parse(fs.readFileSync(path));
}

function bundle (folder_name) {
	const header = read_json(path.join('checklists', folder_name, 'header.json'));
	const entry = path.join('checklists', folder_name, 'build.js');
	const header_string = build_header(header);

	return browserify()
		.add(entry)
		.transform(stringify(['.css']))
		.plugin(apply_header, header_string)
		.bundle();
}

function build_header (options) {
	const download_url = build_option('downloadURL', options.download_url);
	const update_url = build_option('updateURL', options.update_url);
	const icon_url = build_option('icon', options.icon_url);
	const license = options.license || 'Unlicense';

	return `// ==UserScript==
// @name         e621 ${options.name} Record buttons
// @description  Will add clickable buttons on the user record page to make issuing records quicker
// @version      1.${source.version}.${options.version}
// @author       ${options.authors.concat('idem').join(', ')}

// @license      ${license} (${new Date().getFullYear()})

// @namespace    https://github.com/Sasquire/
// @supportURL   https://e621.net/user/show/170289
${update_url}${download_url}${icon_url}
// @match        *://e621.net/user_record/create?user_id=*
// ==/UserScript==

`;
}

function build_option (key, text) {
	if (text === undefined) {
		return '';
	} else {
		const block = `// @${key}`.padEnd(17, ' ');
		return `${block}${text}\n`;
	}
}

function build_version (name) {
	const start = performance.now();
	const output_path = path.join('distribution', `record_buttons.${name}.user.js`);
	const output_stream = fs.createWriteStream(output_path);
	bundle(name).pipe(output_stream).on('finish', () => {
		const end = performance.now();
		console.log(`Built package ${name} in ${Math.floor((end - start) * 100) / 100}ms`);
	});
}
