const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const express = require('express');
const bodyParser = require('body-parser');
const errorMiddleware = require('./api/middlewares/general-error.middleware');
const knexErrorMiddleware = require('./api/middlewares/knex-error.middleware');
const vouhcersRoutes = require('./api/routes/vouchers.routes');
const app = express();

app.use(helmet());
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use('/vouchers', vouhcersRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(knexErrorMiddleware);
app.use(errorMiddleware);

module.exports = app;
