const express = require('express');
const userRouter = require('./routes/userRoute')
const app = express();
const dbConnect = require('./config/dbConncet')
dbConnect()

require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// ? User Router
app.use(userRouter)

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})