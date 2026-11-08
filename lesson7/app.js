import createApp, { json } from 'express';
import {allRouters} from "./route/index.router.js"
import ​​{addDate,printDate,blockDays} from "./middleWares/middleWares.12.js" 
import { PageNotFound } from './Middlewares/middleware.js';

const app = createApp();

app.use("/",allRouters)
app.use(json());

app.use (addDate,blockDays) 
app . use ( "get/" , printDate ) 
 
app.use(cors({ origin: 'http://127.0.0.1:5500/lesson7/client.html' }));

app.use(cors());//גישב בן דומינים

app.use(morgan('dev'))//הפורמט של הפלט

const limite=ratlimit({
    window:10*60*1000//10קדות 
    ,max:100// מגביל ל100 בקשות
})
app.use(limite);//מגביל את הבקשות שאפרש לשלוח לשרת בפרק זמן מסוים 

app.use(helmet());//הבטחה של אפליקצית אקספרס

app.use(PageNotFound)//מידלאור שהדף לא המצא