import { LabookDT } from "../database/Labook.Database";
import { LabookFriends } from "../models/Labook.friends";
import { LabookPost } from "../models/Labook.post";
import { LabookUser } from "../models/Labook.user";

import { makeFriend, post, user } from "../services/types";


export class LabookBS{
    constructor(private labookDT : LabookDT){}

    async createUser(newUser : user){
        const {name , email , password} = newUser

        
      if (!name || !email || !password) {
        let message =`"name", "email" and "password" must be provided'`
        throw new Error(message)
     }

     if(!email.includes("@")){
      throw new Error("Coloque um email valido")
     }

     const user  = new LabookUser(name , email , password)

     await this.labookDT.createUser(user)

    }

    async createPost (newPost : post) {
      const {photo ,description , type , author_id} = newPost

      if (!photo || !description  || !author_id) {
        let message =`"photo", "description" and "authorId" must be provided'`
        throw new Error(message)
     }

     const post = new LabookPost(photo , description , type , author_id)

     await this.labookDT.createPost(post)
    }

    async postById(){
      const posts = await this.labookDT.postById()

      if(!posts){
        throw new Error("Passe o id como parametro")
      }

      return posts
    }

    async makeFriends(getFriends : makeFriend){
      const {user_id , friend_id} = getFriends

      if (!user_id || !friend_id ) {
        let message =`"user_id", "friend_id"`
        throw new Error(message)
     }

     const friend = new LabookFriends(user_id , friend_id)

      await this.labookDT.makeFriends(friend)

    }

    async undoFriends(id : string){
      const result = await this.labookDT.undoFriends(id)

      if(!result){
        throw new Error("Falta o id do amigo a ser excluido")
    }

    return result
    }

    async getFriends(id : string){
      const result = await this.labookDT.getFriends(id)
      
      const teste = result.map((item) => item.friends_id)
      return teste
    }

    async timeLine(userId : string){

      const friends = await this.labookDT.getFriends(userId)
       const teste = friends.map((item) => item.friends_id)
      return await this.labookDT.timeLine(teste[1]) 
    }
}