import knex from "knex";
import LabDatabase from "../database/Lab.Database";
import { LabAdress } from "../models/Lab.Adress";
import { LabUsers } from "../models/LabeUsers";
import { LabProducts } from "../models/LabProducts";
import { LabPurchases } from "../models/LabPurchases";
import transporter from "../services/mailTransporter";
import {
  Adress,
  Products,
  Purchases,
  Users,
} from "../services/types";

export class LabBussiness {
  constructor(private labDatabase: LabDatabase) {}

  async getUser(): Promise<Users[]> {
    const result = await this.labDatabase.getUser();

    return result;
  }

  async handleProducts(order: string, sort: string): Promise<Products[]> {
    const result = await this.labDatabase.handleProducts(order, sort);

    return result;
  }

  async createUser(user: Users): Promise<void> {
    const { name, email, password } = user;

    if (!name || !email || !password) {
      throw new Error("Necessario informar todos os parametros");
    }
    const newUser = new LabUsers(name, email, password);
    const create = await this.labDatabase.createUser(newUser);

  
    return create;
  }

  async createProducts(products: Products): Promise<void> {
    const { name, price, image_url } = products;

    if (!name || !price || !image_url) {
      throw new Error("Necessario informar todos os parametros");
    }

    const newPd = new LabProducts(name, price, image_url);

    const addProd = await this.labDatabase.createProducts(newPd);
    return addProd;
  }

  async addPurchases(purchases: Purchases): Promise<void> {
    const { user_id, product_id, quantity } = purchases;
   
    if (!user_id || !product_id || !quantity) {
      throw new Error("Necessario informar todos os parametros");
    }
    //VERIFICANDO O NO BANCO DE DADOS PELO ID
    const product = await this.labDatabase.productById(product_id);
    
    if (!product) {
      throw new Error("Produto não encontrado");
    }
    
    //PEGANDO O PRODUTO ESPECIFICO E FAZ O CALCULO DO VALOR
    const total_price = product[0].price * quantity
    const newPurc = new LabPurchases (
      user_id ,
      product_id,
      quantity,
      total_price
      )
    ;

    const add = await this.labDatabase.addPurchases(newPurc);

    return add;
    
  }

  async purchasesByUserId(user_id: string): Promise<Purchases[]> {
    const result = await this.labDatabase.purchasesByUserId(user_id);
    return result;
  }

  async addAdress( newAdress : Adress) : Promise<void> {
    const {users_id , adress} = newAdress

    if(!users_id || !adress){
      throw new Error("Necessario informar todos os parametros")
      
    }

    const zipCode = new LabAdress(users_id , adress)

    const addAdress = await this.labDatabase.addAdress(zipCode);
    return addAdress;
  }

  async getAdress(user_id : string) : Promise<Adress[]>{
      const result = await this.labDatabase.getAdress(user_id)
    
      return result
  }
}
