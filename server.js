import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDb from "./config/mongodb.js"
import userRouter from "./routes/userRouter.js"
import imageRouter from "./routes/imageRouter.js"
const PORT = process.env.PORT || 4000
const app = express()



app.use(express.json())
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true, // Allows cookies or auth headers
}));

await connectDb()


app.use('/api/user' , userRouter)
app.use('/api/image' , imageRouter)

app.get('/' , (req,res) =>{
 res.send("API working")
})

app.listen(PORT , ()=> console.log(`server is running on port `  +   PORT))