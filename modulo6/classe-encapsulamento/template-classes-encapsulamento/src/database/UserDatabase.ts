import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase{
 private TABLE_USERS = "Labe_Users";

  public async getAllUsers(){
    const result = await BaseDatabase.connection(this.TABLE_USERS).select("*")
    return result;
  }

  public async createUser( user : User) {
    await BaseDatabase.connection(this.TABLE_USERS).insert({user})
  }
}