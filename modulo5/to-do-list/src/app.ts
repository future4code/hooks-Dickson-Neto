import express from 'express';
import cors from 'cors'
import routerList from './routes/router';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/" , routerList)


export default app