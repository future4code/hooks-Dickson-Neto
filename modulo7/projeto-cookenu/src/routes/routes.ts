import { Router } from "express";
import { CokeenuCT } from "../controller/CookenuController";


 const router = Router()
const cokeenuCT = new CokeenuCT()

router.post("/signup" , cokeenuCT.signup)
router.post("/login" , cokeenuCT.login)
router.get("/info" , cokeenuCT.userProfile)
router.get("/:id" , cokeenuCT.informationUser)

//RECEITAS
router.post("/recipes" , cokeenuCT.createRecipes)
router.get("/recipes/:id" , cokeenuCT.informationRecipes)

//FAZER AMIGOS

router.post("/friend" , cokeenuCT.makeFriends)
router.delete("/dontFriend" , cokeenuCT.dontFriend)

export default router