import { Request , Response } from "express";
import { TodoListBusiness } from "../business/TodoList.business";
import TodoListDatabase from "../database/TodoList.database";
import { StatusList, TodoList } from "../services/types";

const todoListBusiness = new TodoListBusiness(new TodoListDatabase())

export class TodoListController {
    async createUserList(req : Request , res: Response) : Promise<void>{
        try{
           
            const addUserList = {
                nome : req.body.nome,
                apelido : req.body.apelido,
                email : req.body.email

            }
            await todoListBusiness.createUserList(addUserList)
            res.send(addUserList)
        }catch (error: any) {
            res
              .status(error.statusCode)
              .send({ message: error.message || error.sqlMessage });
          }
    }

    async handleUserById(req : Request , res: Response){
        try{
            const userId = req.params.userId as string
            const result = await todoListBusiness.getUserById(userId)
            res.send(result)

            if(!userId){
                throw new Error ("Usuario não encontrado")
            }
        }catch(error: any) {
            res.send(error.message)
            //   .status(error.statusCode)
            //   .send({ message: error.message || error.sqlMessage });
          }
        }

    async editUserById(req : Request , res : Response): Promise <void>{
        try{    
            const userId = req.params.userId as string
           
            if(userId){
                const editUser = {
                    nome : req.body.nome,
                    apelido : req.body.apelido,
                    email : req.body.email
                }
              
                  
                    await todoListBusiness.editUserById(editUser , userId)
                    res.send(editUser)
              
                }else{
                    throw new Error ("Usuario não encontrado")
                }
             
        }catch(error: any) {
            res.send(error.message)
            //   .status(error.statusCode)
            //   .send({ message: error.message || error.sqlMessage });
          }
    }

    async createTask(req : Request , res : Response) : Promise<void>{
       
        try{
            const user_id = req.params.user_id
            const limitDate = req.body.limit_date.split("/")
            const convertDate = (`${limitDate[2]}/${limitDate[1]}/${limitDate[0]}`)
            console.log(convertDate)
            if (user_id){
                const addUserList = {
                    titulo : req.body.titulo,
                    limit_date : convertDate,
                    criador_user_id : user_id,
                    status : StatusList.TO_DO,
                    descrição : req.body.descrição,
    
                }
                await todoListBusiness.createTask(addUserList)
                res.send(addUserList)       
                              
            }else{
                throw new Error("Necessario informar o usuario")
            }
           

        }catch (error: any) {
            res
              .status(error.statusCode)
              .send({ message: error.message || error.sqlMessage });
          }
    }

    async deteleTaskById(req : Request , res: Response) : Promise<void>{
        try{

            const idTask = req.params.idTask

            await todoListBusiness.deleteTaskById(idTask)
            res.end();
        }catch (error: any) {
            res.send(error.message)
            //   .status(error.statusCode)
            //   .send({ message: error.message || error.sqlMessage });
          }
    }
}