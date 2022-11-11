import express from "express";
import cors from 'cors'
import userRouter from "./routes/UserRouter";
import friendsRouter from "./routes/FriendsRouter";
import recipesRouter from "./routes/RecipesRouter";





const app = express()

app.use(express.json())
app.use(cors())

app.use("/user" , userRouter)
app.use("/friends" , friendsRouter )
app.use("/recipes" , recipesRouter )

export default app