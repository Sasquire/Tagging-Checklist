const browserify = require('browserify');
const stringify = require('stringify');
const path = require('path');
const fs = require('fs');
const source = require('./source/version.json');
const through = require('through2');
const { performance } = require('perf_hooks');

build_version('complete');
build_version('wiki');

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
		.plugin(apply_header, { header: header_string })
		.bundle();
}

function build_header (options) {
	const download_url = build_option('downloadURL', options.download_url);
	const update_url = build_option('updateURL', options.update_url);
	const icon_url = build_option('icon', options.icon_url);

	return `// ==UserScript==
// @name         e621 ${options.name} Tagging Checklist
// @description  Framework and Implementation of a tagging checklist to upload form of e621
// @version      1.${source.version}.${options.version}
// @author       ${options.authors.concat('idem').join(', ')}

// @namespace    https://github.com/Sasquire/
// @supportURL   https://e621.net/user/show/170289
${update_url}${download_url}${icon_url}
// @match        *://e621.net/post/upload

// @grant        GM_addStyle
// @grant        GM.addStyle
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
	const output_path = path.join('distribution', `tagging_checklist.${name}.user.js`);
	const output_stream = fs.createWriteStream(output_path);
	bundle(name).pipe(output_stream).on('finish', () => {
		const end = performance.now();
		console.log(`Built package ${name} in ${Math.floor((end - start) * 100) / 100}ms`);
	});
}

/*
	This "apply_header" function, and only the "apply_header" function,
	is an adaptation of the browserify-userscript-header module found
	on npm.
	It is licensed under GPLv3 to Damien Clark <damo.clarky@gmail.com>
	I make no effort to claim this work as my own. All copyright remains
	with Damien Clark.
	Every other piece of copyrightable material belongs to its respective
	owners.
*/
function apply_header (browserify, opts) {
	const header = opts.header;

	/*  create a transform stream  */
	const createStream = function () {
		let firstChunk = true;
		const stream = through.obj(function (buf, enc, next) {
			if (firstChunk) {
				/*  insert the header as the first chunk  */
				this.push(Buffer.from(header));
				firstChunk = false;
			}
			this.push(buf);
			next();
		});
		stream.label = 'header';
		return stream;
	};

	/*  hook into the bundle generation pipeline of Browserify  */
	browserify.pipeline.get('wrap').push(createStream());
	browserify.on('reset', function () {
		browserify.pipeline.get('wrap').push(createStream());
	});
}
