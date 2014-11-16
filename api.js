var express = require('express')
var mockups = require('./mockups')
var cors = require('cors')
var app = express()

app.use(cors());



app.get('/', function (req, res)
{
	res.send(mockups.vip)
})

app.get('/filters', function (req, res)
{
	res.send(mockups.filters)
})

var server = app.listen(4001, function ()
{

	var host = server.address().address
	var port = server.address().port

	console.log('Example app listening at http://%s:%s', host, port)

})
