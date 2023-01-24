import { Router } from "express";
import { DogWalkingCT } from "../Controller/DogWalingCT";



const dogWalking = Router()
const tourCT = new DogWalkingCT()


dogWalking.post("/create" , tourCT.createTour)
dogWalking.get("/show" , tourCT.rideTime)
dogWalking.get("/index" , tourCT.indexTour)
dogWalking.put("/startWalk/:idClient" , tourCT.startWalk )
dogWalking.put("/finishWalk/:idClient" , tourCT.finishWalk )

export default dogWalking