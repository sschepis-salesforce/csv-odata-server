var _ = require('underscore');
var http = require('http');
var fs = require('fs');
var parse = require('csv-parse');
var Datastore = require('nedb');
var ODataServer = require("simple-odata-server");

var config = require('./config.js');

var db = new Datastore( { inMemoryOnly: true });

var model = config.model;

var odataServer = ODataServer("http://localhost:1337")
    .model(model)
    .onNeDB(function(es, cb) { cb(null, db) });

http.createServer(odataServer.handle.bind(odataServer)).listen(1337);
console.log('Initialized OData Server.');

var parser = parse({delimiter: ','}, function(err, data) {
    var count = 0;
    _.each(data, function(e, i) {
        if(i === 0) return;
        var newObject = {};
        _.each(config.csv.fieldOrder, function(ee, ii) {
            newObject[ee] = e[ii];
        });
        db.insert(newObject);
        count = i;
    });
    console.log(count + ' records read from CSV.');
});

fs.createReadStream(__dirname + '/' + config.csv.filename).pipe(parser);

