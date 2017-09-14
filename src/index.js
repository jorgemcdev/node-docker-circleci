// npm packages
import express from 'express';
import logger from 'winston';

// Middleware
const app = express();

// Constants
const PORT = process.env.PORT || 8082;
const ENV = process.env.NODE_ENV || 'development';

// Routes
app.get('/', (req, res) => {
  res.status(200).send({ message: 'Hello World!' });
});

// Start Server
const server = app.listen(PORT, (err) => {
  if (err) logger.error(`Error starting server : ${err}`);
  const { port } = server.address();
  logger.info(`Server started on port: ${port} [${ENV}]`);
});

// Export app
export default app;
