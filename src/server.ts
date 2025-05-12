import express from'express';
import {serverConfig} from './config';
import { pingHandler } from './controller/ping.controller';

console.log(serverConfig);

const app = express();
const PORT : number = 3000;

app.get('/', pingHandler);

app.listen(PORT, ()=>{
   console.log(`Server is running on http://localhost:${PORT}`);
});


