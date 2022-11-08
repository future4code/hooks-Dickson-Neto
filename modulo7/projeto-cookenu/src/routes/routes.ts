import { Router } from "express";
import { CokeenuCT } from "../controller/CookenuController";


 const router = Router()
const cokeenuCT = new CokeenuCT()

router.post("/signup" , cokeenuCT.signup)
router.post("/login" , cokeenuCT.login)
router.get("/info" , cokeenuCT.userInformation)


export default router