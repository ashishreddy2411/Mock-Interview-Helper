import express from 'express';
import {config} from 'dotenv';
import morgan from 'morgan';
import router from './routes/index';
import cookieParser from 'cookie-parser';
config();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use("/AI",router);
export default app;