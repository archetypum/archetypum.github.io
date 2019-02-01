const m = require('mithril')

const LayoutPost = require('./LayoutPost')
const Link = require('./Link')


const LayoutPostSolo = {
  view: vnode =>
    m('div.container',
      m(Link, {link: vnode.attrs.baseUrl}, '<- go back '),
      m('section', vnode.children)
  )
}


module.exports = LayoutPostSolo
