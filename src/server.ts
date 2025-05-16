import express from'express';
import {serverConfig} from './config';
import v1Router from './routes/v1_routes/index.routes';
import v2Router from './routes/v2_routes/index.routes';


console.log(serverConfig);

const app = express();
const PORT : number = 3000;

//Parses the incoming json and adds the body to res.body property
app.use(express.json());

app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);

app.listen(PORT, ()=>{
   console.log(`Server is running on http://localhost:${PORT}`);
});


