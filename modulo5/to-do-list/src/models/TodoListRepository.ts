import { ListTask, TodoList } from "../services/types";
import { newList } from "./TodoList";
import { UserTask } from "./TodoListTask";

export interface TodoListRepository {
  createUserList(list: newList): Promise<void>;
  getUserById(id: string): Promise<TodoList[]>;
  editUserById(list: newList, id: string): Promise<number>;
  takeUser(): Promise<TodoList[]>;
  searchUser(query : string) : Promise<TodoList[]>

  //TAREFAS
  createTask(list: UserTask): Promise<void>;
  deleteTaskById(id: string): Promise<number>;
  takeTaskUserId(idUser: string): Promise<ListTask[]>;
}
