import { Request, Response } from "express";
import { FriendsBS } from "../bussiness/FriendsBusiness";
import { CookenuDT } from "../data/CokeenuDatabase";
import {  FriendsDTO } from "../model/interfaces";



const friendsBS = new FriendsBS( new CookenuDT())
export class FriendsCT {

    async makeFriends(req : Request , res : Response){
        try{
           const input : FriendsDTO = {
                user : req.headers.authorization  as string,
                friend : req.body.beFriend,
           } 

            await friendsBS.makeFriends(input)

           res.send({message : "Amizade feita com sucesso"})


        }catch(error : any){
            res.send(error.message)
        }
    }

    async dontFriend (req : Request , res : Response){
        try{
            const input : FriendsDTO = {
                user : req.headers.authorization  as string,
                friend : req.body.beFriend,
            }

             await friendsBS.dontFriend(input)

            res.send({message: "Unfollowed successfully"})


        }catch(error : any){
            res.send(error.message)
        }
    }


    async timeLine(req : Request , res: Response){
        try{
            

         }catch(error : any){
            res.send(error.message)
        }
    }
}