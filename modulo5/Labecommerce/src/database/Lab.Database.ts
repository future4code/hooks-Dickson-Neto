import { Database } from "../migrations/connection";
import {  LabRepository } from "../models/Lab.Repository";
import { LabUsers } from "../models/LabeUsers";
import { LabProducts } from "../models/LabProducts";
import { LabPurchases } from "../models/LabPurchases";
import { Products, Purchases, Users } from "../services/types";


const labeUsers = "labecommerce_users"
const labProducts = "labecommerce_products"
const labPurchases = "labecommerce_purchases"

export default class LabDatabase extends Database implements LabRepository{
    public async getUser() : Promise<Users[]> {
        const result = await Database.connection(labeUsers).select("*")
        return result.flat(1)
    }

    public async handleProducts(order : string , sort : string) : Promise<Products[]>{
        const result = await Database.connection(labProducts).select("*").orderBy("name", `${sort}`).where("name", "like",`%${order}%`)
        return result
    }
    public async createUser(users : LabUsers) : Promise<void>{
       return  Database.connection(labeUsers).insert(users)
    }
    
    public async createProducts(products : LabProducts) : Promise<void>{
        return await Database.connection(labProducts).insert(products)
       
    }

    public async addPurchases(purchases : LabPurchases) : Promise<void>{
       
       return await Database.connection(labPurchases).insert(purchases)
    }

    public async purchasesByUserId(user_id : string) : Promise<Purchases[]>{
        return await Database.connection(labPurchases).select("id" , "product_id" , "quantity" ,"total_price").where({user_id : user_id})

    }
    //BUCANDO PRODUTO PELO ID
    public async productById(product_id : string) : Promise<Products[]>{
        return await Database.connection(labProducts).select().where({ id: product_id})

    }
}   