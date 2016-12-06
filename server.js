var express = require('express');

var knexConfig = require('./knexfile');
var knex = require('knex')(knexConfig.development);
knex.migrate.rollback().then(() => {
  return knex.migrate.latest()
}).then(()=> {
  return knex.seed.run()
}).then(()=> {
  console.log('DB created');
})


var bookshelf = require('bookshelf')(knex);

var app = module.exports = express();
var api = require('kalamata')(app);

var Thing = bookshelf.Model.extend({
    tableName: 'things'
});

var User = bookshelf.Model.extend({
    tableName: 'users',
    things: function() {
        return this.hasMany(Thing);
    }
});

api.expose(User);
api.expose(Thing);

api.beforeGetThings(execThingsQuery);
api.beforeGetRelatedThings(execThingsQuery);

function execThingsQuery(req, res, model) {
    // only get things that are not flagged as deleted
    model.where({'deleted': false});
}

var port = Number(process.env.PORT || 3000);
app.listen(port, function() {
    console.log('Server listening on port ' + port);
});
