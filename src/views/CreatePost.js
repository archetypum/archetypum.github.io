// ./views/CreatePost.js
// The page to create posts

// references
// https://stackoverflow.com/questions/45831191/generate-and-download-file-from-js

const m = require('mithril')

const parseMarkdown = require('../helpers/parseMarkdown')
const LayoutPostSolo = require('./LayoutPostSolo')


// This is a closure! //  https://how-to-mithril.js.org/#!/ -> simple closure comp
const CreatePost = () => {

	let now = new Date().toJSON().substring(0, 10)

	let isButtonDisabled = true

	let front_matter = '---\ntitle: \ntags: \nurl: \nbaseUrl: \ndate: ' + now + '\n---\n'
	let front_matter_parsed = {} // for files 
	let content = localStorage['postContent'] || "Please don't \`XSS\` me! But if you do, tell me how..."
	let content_rendered = ''

	parseFrontMatter = function (e) {
		front_matter = e.target.value
		let top = (front_matter.replace('---\n', '').split('\n---\n'))[0] // clean from dashes
		top.split('\n').forEach(line => {
			var [key, value] = line.split(/: /) // seperate by `: `
			front_matter_parsed[key] = value
		})

		console.log(front_matter_parsed)
	}
	parseContent = function (e) {
		content = e.target.value
		localStorage['postContent'] = content

		content_rendered = parseMarkdown(content)
	}


	// https://stackoverflow.com/a/45831280/6025059
	download = function (filename, text) {
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	}

	downloadFile = function () {
		let filename = front_matter_parsed['date'] + '_' + front_matter_parsed['title'] + ".md"
		console.log(filename)
		let text = front_matter + content

		download(filename, text)
	}


	return {
		view: () =>
			m(LayoutPostSolo, {baseUrl: ''},
				m('div.container[style=""]',
					m('form', { autocomplete: 'on' },
						m('div.row',
							m('textarea.col-6[name=front-matter][rows=7]', { oninput: (e) => { parseFrontMatter(e); isButtonDisabled = false }, value: front_matter }),
							m('div.col-6')
						),
						m('br'),
						m('div.row',
							m('textarea.col-6[name="post-content"][style="min-height:70vh;"]', { oninput: parseContent, onmouseover: parseContent, value: content}),
							m('div.col-6.word-wrap',
								'rendered here',
								content_rendered
							)
						),
						m('input[type=button][value="Download this file"]', { onclick: downloadFile, disabled: isButtonDisabled }, '')
					)
				)
			)
	}
}



module.exports = CreatePost;
