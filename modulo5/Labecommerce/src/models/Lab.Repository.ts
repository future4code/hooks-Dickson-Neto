import { Products, Purchases, Users } from "../services/types";
import { LabUsers } from "./LabeUsers";
import { LabProducts } from "./LabProducts";
import { LabPurchases } from "./LabPurchases";



export interface LabRepository{

    //GET
    getUser() : Promise<Users[]>
    handleProducts(order : string , sort : string) : Promise<Products[]>
    purchasesByUserId(user_id : string) : Promise<Purchases[]>

    //POST
    createUser(user : LabUsers) : Promise<void>
    createProducts(products : LabProducts) : Promise<void>
    addPurchases(purchases : LabPurchases) : Promise<void>
}