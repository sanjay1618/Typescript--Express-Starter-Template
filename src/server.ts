import express from'express';
import {serverConfig} from './config';
import userRoute from './routes/users.routes';


console.log(serverConfig);

const app = express();
const PORT : number = 3000;

//Parses the incoming json and adds the body to res.body property
app.use(express.json());

app.use('/users',userRoute ); // So, when a users hits the path starting with /users it mounts to the userRoute

app.listen(PORT, ()=>{
   console.log(`Server is running on http://localhost:${PORT}`);
});


