import express from "express";
import cors from 'cors';
import encodeExpress from "./routes/encode";
import decodeExpress from "./routes/decode";


const app = express();
const port = 8000;


app.use(cors())
app.use(express.json());
app.use('/encode', encodeExpress);
app.use('/decode', decodeExpress);

app.listen(port, () => {
  console.log('Server true: ', port);
});