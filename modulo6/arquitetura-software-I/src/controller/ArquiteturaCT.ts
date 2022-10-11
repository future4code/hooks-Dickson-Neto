import { Request, Response } from "express";
import { ArquiteturaBS } from "../bussiness/ArquiteturaBS";
import ArquiteturaDT from "../database/ArquiteturaDT";
import { User } from "../services/types";

const arquiteturaBS = new ArquiteturaBS(new ArquiteturaDT());
export class ArquiteturaCT {
  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };
      await arquiteturaBS.createUser(newUser);
      res.send({ message: "Usuario criado com sucessp", user: newUser });
    } catch (error: any) {
      res.send(error.message);
    }
  }

  public async getAllUser(req: Request, res: Response) {
    const result = await arquiteturaBS.getAllUser();

    res.send(result);
  }

  public async deleteUserById(req: Request, res: Response) {
    try {
        const idUser = req.params.idUser as string;

       await arquiteturaBS.deleteUserById(idUser)

        res.send({message : "Usuario deletado com sucesso"})
    } catch (error: any) {
      res
        .status(error.statusCode)
        .send({ message: error.message || error.sqlMessage });
    }
  
  }
}
