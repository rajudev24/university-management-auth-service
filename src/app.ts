import express, { Application } from 'express';
import cors from 'cors';
import globalErrorhandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Applicate routes
app.use('/api/v1/', routes);

// Global Error Handler
app.use(globalErrorhandler);

export default app;
