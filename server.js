var fs = require('fs')
var path = require('path')

var express = require('express')
var bodyParser = require('body-parser')

var app = express()

var COMMENTS_FILE = path.join(__dirname, 'comments.json')

app.set('port', (process.env.PORT || 3000))

try {
  fs.statSync('dist')
  console.log('Serving static build from dist/')
  console.log('Run `npm run clean` to return to development mode')
  app.use('/', express.static(path.join(__dirname, 'dist')));
}
catch (e) {
  console.log('Serving development build with nwb middleware')
  console.log('Run `npm run build` to create a production build')
  app.use(require('nwb/express')(express))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache')
    next()
})

app.get('/api/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    res.json(JSON.parse(data))
  })
})

app.post('/api/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    var comments = JSON.parse(data)
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    var newComment = {
      id: Date.now(),
      author: req.body.author,
      text: req.body.text,
    }
    comments.push(newComment)
    fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function(err) {
      if (err) {
        console.error(err)
        process.exit(1)
      }
      res.json(comments)
    })
  })
})

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/')
})
