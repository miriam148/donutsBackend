const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/db");
const donutsRouter = require("./src/routes/donutRoutes");  

dotenv.config();  

const app = express();


connectDB();

app.use(express.json());  


app.use('/donuts', donutsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
