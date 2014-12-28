/* exported Thing */

var app = require('../main');
var bookshelf = app.get('bookshelf');

var Thing = module.exports = bookshelf.Model.extend({
    tableName: 'things'
});