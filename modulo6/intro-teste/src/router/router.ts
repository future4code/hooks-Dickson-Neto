import { Router } from "express";
import { TestesCT } from "../controller/TestesCT";

const router = Router()
const testeCT = new TestesCT()

router.post("/user/registration" , testeCT.registrationUser)
router.post("/user/login" , testeCT.login)

export default router