
import {Router} from 'express'
import {LabController } from '../controllers/Lab.Controller';



const router = Router();
const labController = new LabController();

//GET
router.get("/users" , labController.getUsers)
router.get("/products" , labController.handleProducts)
router.get("/user/:user_id/purchases",labController.purchasesByUserId)

//POST
router.post("/users" , labController.createUser)
router.post("/products" , labController.createProducts)
router.post("/purchases" , labController.addPurchases)


export default router;