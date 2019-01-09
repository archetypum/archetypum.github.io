// ./helpers/renderGraph.js
// A functional snippet to draw functions
// See ./src/views/Graph for more

// example:
// graph('x', 'Math.sin(x)')
// ... will draw two functions


const m = require('mithril');
const Graph = require('../views/Graph')
const drawFunction = require('./drawFunction')


const graph = (...args) => m(Graph, {funcs: args, drawFunc: drawFunction})


module.exports = graph
