
import {Router} from 'express'
import { ExController } from '../controllers/controllers';



const router = Router();
const exController = new ExController();


router.get("/user" , exController.getUsers)
router.get("/usersName" , exController.filterUser)
router.get("/usersType" , exController.typeUser)





export default router;