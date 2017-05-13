var Raphael = require('raphael')
require('./g.raphael')
require('./g.bar')
require('./g.dot')
require('./g.line')
require('./g.pie')

module.exports = {
  raphael: Raphael,
  graphael: Raphael.g,
  dotchart: Raphael.fn.dotchart,
  barchart: Raphael.fn.barchart,
  linechart: Raphael.fn.linechart,
  piechart: Raphael.fn.piechart,
}
