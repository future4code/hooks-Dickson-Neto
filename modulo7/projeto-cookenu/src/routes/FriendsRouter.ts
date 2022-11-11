import { Router } from "express";
import { FriendsCT } from "../controller/FriendsController";


 const friendsRouter = Router()
const friendsCT = new FriendsCT()


friendsRouter.post("/follow" , friendsCT.makeFriends)
friendsRouter.delete("/unfloow" , friendsCT.dontFriend)

export default friendsRouter