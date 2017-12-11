import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 4000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/quibbles', function(req, res) {
  // Mocking a database
  res.json([
    {"id": 1, "category":"Technology", "text":"Old programmers never die .. they just lose their memory."},
    {"id": 2, "category":"Science", "text":"I'm reading a book about anti-gravity. It's impossible to put down."},
    {"id": 3, "category":"Computer", "text":"Did you hear about the computer technician who received third degree burns? He touched the firewall."}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
