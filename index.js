import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = 8000;
const CONNECTION_URL = 'mongodb+srv://chanmyaeoo:chanmyaeoo123@cluster0.1hpoi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(express.json({ limit: '30mb', extended: true}));
app.use(express.urlencoded({ limit: '30mb', extended: true}));
app.use(cors());

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => { console.log('App is running on port ' + PORT )}))
.catch(error => console.log(error))