import TodoListDatabase from "../database/TodoList.database";
import { newList } from "../models/TodoList";
import { UserTask } from "../models/TodoListTask";
import { ListTask, TodoList} from "../services/types";


export class TodoListBusiness {
    constructor(private todoListDatabase : TodoListDatabase){}
   
    async createUserList( list : TodoList ) : Promise<void>{
        const {nome , apelido , email} = list

        if(!nome || !apelido || !email){
            throw new Error("Todos os campos precisam ser preenchidos.")
        }

        const List = new newList(
        
            nome,
            apelido,
            email,
        )
        await this.todoListDatabase.createUserList(List)
    }

    async getUserById(id : string) : Promise <TodoList>{
        const findUser = await this.todoListDatabase.getUserById(id)
       
        if(!findUser.length){
            throw new Error("Usuario não encontrado")
        }
        return findUser[0]
    }


    async editUserById(list : TodoList , id : string) {
        const {nome , apelido , email} = list

        if(!nome || !apelido || !email){
            throw new Error("Todos os campos precisam ser preenchidos.")
        }

        const List = new newList(
        
            nome,
            apelido,
            email,
        )
        // await this.todoListDatabase.createUserList(List)
       const editUser = await this.todoListDatabase.editUserById(List , id)
        return editUser
    }

    async createTask(list : ListTask) : Promise<void> {
        const {titulo , limit_date, criador_user_id, status , descrição } = list
       
        if(!titulo || !descrição || !limit_date){
            throw new Error("Todos os campos precisam ser preenchidos.")
        }

        const Task = new UserTask(
            titulo, 
            limit_date, 
            criador_user_id,
            status,
            descrição
            
        )

        const createTask = await this.todoListDatabase.createTask(Task)
            return createTask

    }

    async deleteTaskById(id : string) : Promise<number>{
        const findTask = await this.todoListDatabase.deleteTaskById(id)

        if (!findTask) {
            throw new Error("Usuario não encontrado")
        }
        return await this.todoListDatabase.deleteTaskById(id)
    }
}