import express from'express';
import {serverConfig} from './config';
import { pingHandler } from './controller/ping.controller';
import {log1, log2, log3} from './middleware/logTemp.middleware';


console.log(serverConfig);

const app = express();
const PORT : number = 3000;

app.get('/', pingHandler);

app.get('/route', log1,log2, log3);
    

app.listen(PORT, ()=>{
   console.log(`Server is running on http://localhost:${PORT}`);
});


