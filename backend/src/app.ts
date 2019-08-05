import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import lusca from 'lusca';
import cors from 'cors';
import mongoose from 'mongoose';
import {MONGODB_URI} from './utils/secrets';
import * as taskController from './controllers/tasks';

const mongoUrl = MONGODB_URI;
mongoose.connect(mongoUrl, {useNewUrlParser: true});

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(lusca.xssProtection(true));
app.use(cors());

app.get('/', taskController.home);

export default app;
