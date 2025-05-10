import express from'express';
const app = express();
const PORT : number = 3000;

app.get('/', (req, res) => {
    res.send("Pong We have received the get request");
});

app.listen(PORT, ()=>{
   console.log(`Server is running on http://localhost:${PORT}`);
});


