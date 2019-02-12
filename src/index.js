const m = require('mithril')

const routes = require('./models/routes')

const SearchSection = require('./views/SearchSection')
const FeaturesPage = require('./views/FeaturesPage')
const CreatePost = require('./views/CreatePost')
const Link = require('./views/Link')

const markdown = require('./helpers/renderMarkdown')

const Main = {
  view: () =>
    m('div.container.p-0',
      m('div.container',
        [
          markdown(`##Welcome to my blog!
          This is where I post stuff I like or demonstrate/document cool things I do as learning projects. This website itself\
          is one!`),
          m("p", 
            "You can search some tags to start reading things. Or check out ", 
            m('span', m(Link, { link: 'CreatePost' }, 'the coolest page')),
            " on this website, where I actually\
            write a post, prototype a page or experiment features."
          ),
          markdown(`Find me on [github](https://github.com/archetypum), [twitter](https://twitter.com/hakkirizakucuk) or [linkedin](https://www.linkedin.com/in/hrkucuk/)`)
        ]
      ),
      m(SearchSection),
    )
}


routes.addComponentRoute('', Main)
routes.addComponentRoute('FeaturesPage', FeaturesPage)
routes.addComponentRoute('CreatePost', CreatePost)
routes.addVnodeRoutes() // adds all content to the routes

m.route(document.body, '', routes.routes)

// Still in the game and kickin'
// https://www.youtube.com/watch?v=rog8ou-ZepE
// https://www.youtube.com/watch?v=EC7Re8cczj0&start_radio=1&list=RDEC7Re8cczj0
