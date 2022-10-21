import { Router } from "express";
import { LabookCT } from "../controller/Labook.Controller";


const router = Router()
const labookCT = new LabookCT()

router.post("/user" , labookCT.createUser)
router.post("/post" , labookCT.createPost)
router.post("/addedFriend/:id" , labookCT.makeFriends)

router.get("/post" , labookCT.postById)
router.get("/timeline/:userId" , labookCT.timeLine)


router.get("/friend/:userId" , labookCT.timeLine)

router.delete("/brokenFriend/:id" , labookCT.undoFriends)

export default router