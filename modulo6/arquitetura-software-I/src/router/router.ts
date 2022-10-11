import { Router } from "express";
import { ArquiteturaCT } from "../controller/ArquiteturaCT";


const router = Router()
const arquiteturaCT = new ArquiteturaCT()

router.post("/create" , arquiteturaCT.createUser)

router.get("/all" , arquiteturaCT.getAllUser)

router.delete("/delete/:idUser" , arquiteturaCT.deleteUserById)

export default router