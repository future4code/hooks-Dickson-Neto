import { Request, Response } from "express";
import { LabookBS } from "../business/Labook.Business";
import { LabookDT } from "../database/Labook.Database";
import { post, user } from "../services/types";

const labookBS = new LabookBS(new LabookDT());
export class LabookCT {


  async createUser(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const newUser: user = { name, email, password };

      await labookBS.createUser(newUser);

      res.send({ message: "Success!" });
    } catch (error: any) {
      res.send(error.message);
    }
  }

  async createPost(req: Request, res: Response) {
    try {
      const newPost: post = {
        photo: req.body.photo,
        description: req.body.description,
        type: req.body.type,
        author_id: req.body.author_id,
      };

      await labookBS.createPost(newPost);
      res.send({ message: "Success!" });
    } catch (error: any) {
      res.send(error.message);
    }
  }

  async postById(req: Request, res: Response): Promise<void> {
    try {
      // const id = req.params.id as string;

      const result = await labookBS.postById();

      res.send(result);
    } catch (error: any) {
      res.send(error.message);
    }
  }


  async makeFriends( req : Request , res: Response){
    try{
      const id = req.params.id as string;
      
      
      const getFriends = {
         user_id : id,
         friend_id : req.body.friend_id    
      }

      await labookBS.makeFriends(getFriends)
      res.send({message: "Friend Added!"});

    }catch(error: any) {
      res.send(error.message);
    }
  }

  async undoFriends(req : Request , res : Response){
    try{
      const id = req.params.id as string

      await labookBS.undoFriends(id)
      res.send({message: "Broken Friend!"});

    }catch(error: any) {
      res.send(error.message);
    }
  }

  async getFriends( req : Request , res : Response){
    const id = req.params.id as string

    const result = await labookBS.getFriends(id)
    
    res.send(result)
  }

  async timeLine(req : Request , res : Response){
    try{
      const userId = req.params.userId as string

      const result = await labookBS.timeLine(userId)

      res.send(result)
    }catch(error: any) {
      res.send(error.message);
    }
  }
}
