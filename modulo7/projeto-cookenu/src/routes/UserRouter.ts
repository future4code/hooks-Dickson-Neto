import { Router } from "express";
import { UserCT } from "../controller/UserController";


const userRouter = Router()
const userCT = new UserCT()


userRouter.post("/signup" , userCT.signup)
userRouter.post("/login" , userCT.login)
userRouter.get("/info" , userCT.userProfile)
userRouter.get("/:id" , userCT.informationUser)



export default userRouter