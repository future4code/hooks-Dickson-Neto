import { Database } from "../connection/connection";
import { addFriends, createRecipes, signupUser } from "../model/types";

const TABLE_USER = " cookenu_user "
const TABLE_RECIPES = "cookenu_recipes"
const TABLE_FRIENDS = "cookenu_friends"

export class CookenuDT extends Database{


    public async signup(signup : signupUser){
        return Database.connection(TABLE_USER).insert(signup)
    }

    public async getInformation(email : string){
        const result  = await Database.connection(TABLE_USER).select("*").where({email : email})
        return result
    }

    public async userDetails(id : string){
        const result  = await Database.connection(TABLE_USER).select("id" , "name" , "email").where({id})
        return result
    }
    // RECEITAS

    public async createRecipes(recipes : createRecipes){
        return Database.connection(TABLE_RECIPES).insert(recipes)
    }

    public async getRecipesByUserId(id : string){
        return Database.connection(TABLE_RECIPES).select("id", "title" , "description" , "preparation_mode" , "creation_At").where({user_id : id})
    }
    public async informationRecipes(id : string){
        const result  = await Database.connection(TABLE_RECIPES).select("*").where({id})
        return result
    }

    //FAZER AMIGOS

    public async makeFriends(addFriend : addFriends){
        return Database.connection(TABLE_FRIENDS).insert(addFriend)
    }

    public async removeFriends(unfollowed : string){
        const result = await Database.connection(TABLE_FRIENDS).delete().where({unfollowed})
    }
}