import { Database } from "../migrations/connection";
import { newList } from "../models/TodoList";
import { TodoListRepository } from "../models/TodoListRepository";
import { UserTask } from "../models/TodoListTask";
import { ListTask, TodoList } from "../services/types";

const list_table = "TodoListUser";
const task_table = "TodoListTask";

export default class TodoListDatabase
  extends Database
  implements TodoListRepository
{
  public async createUserList(list: newList): Promise<void> {
    return await Database.connection(list_table)
    .insert(list);
  }

  public async getUserById(id: string) {
    return await Database.connection(list_table)
    .select("*")
    .where({ id: id });
  }

  public async editUserById(list: newList, id: string): Promise<number> {
    return await Database.connection(list_table)
    .update(list)
    .where({ id: id });
  }

  public async takeUser(): Promise<TodoList[]> {
    const result = await Database.connection(list_table)
    .select("*");
    return result.flat(1);
  }

 

  public async searchUser(query : string){
    const result = await Database.connection(list_table).select("*").where({email : query})
    return result
  }

  //TAREFAS
  public async createTask(list: UserTask): Promise<void> {
    return await Database.connection(task_table)
    .insert(list);
  }

  public async deleteTaskById(id: string): Promise<number> {
    return await Database.connection(task_table)
    .delete()
    .where({ id: id });
  }
  
  public async takeTaskUserId(idUser: string) {
    const result = await Database.connection(task_table)
      .select("*")
      .where({ criador_user_id: idUser });
    return result;
  }
}
