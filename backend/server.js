var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var controller = require('./src/controller/controller');
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./src/config/swagger.json');
var router = express.Router();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./src/routes/routes');
routes(app);

app.listen(port);
console.log('Simple Registration API started on: ' + port);