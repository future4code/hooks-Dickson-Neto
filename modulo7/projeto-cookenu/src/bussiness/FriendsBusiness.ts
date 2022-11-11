
import { CookenuDT } from "../data/CokeenuDatabase";
import { createRecipesDTO, FriendsDTO, loginUserDTO, signupUserDTO } from "../model/interfaces";
import moment from "moment";
import { addFriends, createRecipes, signupUser } from "../model/types";
import { Authentication } from "../services/Authentication";
import { IdGenerator } from "../services/idGenerator";

import {  InvalidEmail, invalidFields, InvalidPassword, InvalidToken, invalidUserEmail, RegisteredEmail, RequiredFiels } from "../error/CustomError";
import { EncryptPassword } from "../services/EncryptPassword";
 
const authentication = new Authentication()


export class FriendsBS{
    constructor(
        private cookenuDT : CookenuDT
        ){}
    async makeFriends(input : FriendsDTO ){
        try{
            const {user , friend} = input

            if(!user){
                throw new InvalidToken()
            }

            if(!friend){
                throw new RequiredFiels()
            }

            const getToken : any = authentication.tokenData(user)

            const addFriend : addFriends = {
                user : getToken.id,
                be_friends : friend
            }
            console.log(addFriend)
            const result = await this.cookenuDT.makeFriends(addFriend)
            return result

        }catch(error : any){
            throw new Error(error.message);
        }
    }

    async dontFriend(input : FriendsDTO){
        try{
            const {user , friend} = input

        if(!user){
            throw new InvalidToken()
        }
        if(!friend){
            throw new RequiredFiels()
        }

        const getToken : any = authentication.tokenData(user)
       
        const unfollowed : string = friend
       

        const result = await this.cookenuDT.removeFriends( unfollowed)

        return result
        }catch(error : any){
            throw new Error(error.message);
        }
        
    }
}