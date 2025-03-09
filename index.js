const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/db");
const donutsRouter = require("./src/routes/donutRoutes");  
const cors = require("cors");
// app.use("/uploads", express.static("uploads")); //Esto permite acceder a las imágenes desde el frontend usando la URL /uploads/nombreArchivo.jpg.



dotenv.config();  

const app = express();
app.use(cors());

connectDB();

app.use(express.json());  


app.use('/api/donuts', donutsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
