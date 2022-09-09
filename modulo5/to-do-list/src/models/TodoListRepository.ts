import { TodoList } from "../services/types";
import { newList } from "./TodoList";
import { UserTask } from "./TodoListTask";


export interface TodoListRepository {
    createUserList(list : newList) : Promise<void>
    getUserById(id : string) : Promise<TodoList[]>
    editUserById(list : newList , id : string) : Promise<number>
    createTask(list : UserTask) : Promise<void>
}