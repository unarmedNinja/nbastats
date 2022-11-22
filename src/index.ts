import 'reflect-metadata';
import express from 'express';
import { container } from 'tsyringe';
import StatsController from './stats/stats.controller';
const port = process.env.port || 5000;

const app = express();

app.use('/stats', container.resolve(StatsController).routes());
app.listen(port, () => console.log(`listening on port: ${port}`));