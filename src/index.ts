import * as http from 'http';
import {logger} from './util/logger';
import helmet from "helmet";
import * as dummyController from "./api/controllers/dummy";
import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';


const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(helmet());
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', process.env.CORS],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// api routes
app.use('/dummy', dummyController.default);

const httpServer = http.createServer(app);

httpServer.listen(process.env.PORT, () => {
    logger.info('HTTP Server running on port: ' + process.env.PORT);
});
