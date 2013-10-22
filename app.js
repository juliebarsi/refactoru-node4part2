
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var places = {
		"Seville": {
			desc: "You are starting in Seville.",
			next: "Canary Islands"
		},
		"Canary Islands": {
			desc: "You are now in the Canary Islands",
			next: "Cape Verde"
		},
		"Cape Verde": {
			desc: "You are now in Cape Verde.",
			next: "Strait of Magellan"
		},
		"Strait of Magellan": {
			desc: "You are now in the Strait of Magellan.",
			next: "Guam"
		},
		"Guam": {
			desc: "You are now in Guam.",
			next: "Philippines"
		},
		"Philippines": {
			desc: "You are now in Philippines.",
			next: "Seville"
		}
	}

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

//part 2 answer here
app.get("/location", function(req, res) {
	res.send(places[req.query.location]);
})

//Just ignore these scribbles:
// app.get("/canary", function(req, res) {
// 	res.send(places["Canary Islands"].desc);
// })
// app.get("/capeverde", function(req, res) {
// 	res.send(places["Cape Verde"].desc); 
// })
// app.get("/strait", function(req, res) {
// 	res.send('strait.jade', { title: 'Strait of Magellan' }); //places["Strait of Magellan"].desc
// })
// app.get("/guam", function(req, res) {
// 	res.send('guam.jade', { title: 'Guam' }); //places["Guam"].desc
// })
// app.get("/philippines", function(req, res) {
// 	res.send('philippines.jade', { title: 'Philippines' }); //places["Philippines"].desc
// })

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
