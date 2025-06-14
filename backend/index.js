import express from "express"
import cors from "cors"
import {connectDB} from "./config/db.js"
import 'dotenv/config'
import userRouter from "./routes/userRoutes.js"

const app = express();
const port = 3000

app.use(express.json())
app.use(cors())

connectDB();

app.use("/api/user",userRouter);

app.listen(port,()=>{
    console.log(`Server started in http://localhost:${port}`)
})

