import createApp, { json } from 'express';
import {allRouters} from "./route/index.router"
const app = createApp();


app.use("/",allRouters)
app.use(json());