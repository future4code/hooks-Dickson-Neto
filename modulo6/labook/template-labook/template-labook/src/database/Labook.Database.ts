import { Database } from "../connection/connection";
import { LabookFriends } from "../models/Labook.friends";
import { LabookPost } from "../models/Labook.post";
import { LabookUser } from "../models/Labook.user";

const TABLE_USER = "labook_users"
const TABLE_POST = "labook_posts"
const TABLE_FRIENDS = "labook_friends"

export class LabookDT extends Database{
    public async createUser(newUser : LabookUser) : Promise<void>{
        return await  Database.connection(TABLE_USER).insert(newUser)
    }

    public async createPost( newPost : LabookPost): Promise<void>{
        return await Database.connection(TABLE_POST).insert(newPost)
    }

    public async postById(){
        const result =  await Database.connection(TABLE_POST).select("*")

        return result
    }


    public async makeFriends(friend : LabookFriends){
        return await Database.connection(TABLE_FRIENDS).insert(friend)
    }

    public async undoFriends(id : string){
        const result = await Database.connection(TABLE_FRIENDS).delete().where({friends_id : id})

        return result
    }

    public async getFriends(id : string) {
       const result =  await Database.connection(TABLE_FRIENDS).select("friends_id").where({user_id : id})

       return result
    }

    public async timeLine(friends: any[]){
        const result = await Database.connection(TABLE_POST).select("*").where({author_id : friends}).orderBy('created_at', 'desc')

        return result
    }
}