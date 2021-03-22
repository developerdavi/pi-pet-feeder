const express = require('express');
const http = require('http');
const cors = require('cors');
const log = require('./helpers/log');
const config = require('./config');
const router = require('./routes');
const logMiddleware = require('./helpers/logMiddleware');

require('./services/init');
require('./crons');

const app = express();
const server = new http.Server(app);
const port = config.PORT;

app.use(express.json());
app.use(logMiddleware);
app.use(cors());
app.use(router);

server.listen(port, () => {
  log(`Pet feeder started. Running server on port ${port}`);
});
