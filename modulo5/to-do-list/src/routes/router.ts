import { Router } from "express";
import { TodoListController } from "../controllers/TodoList.controller";

const routerList = Router();
const toDoListController = new TodoListController();

routerList.post("/user", toDoListController.createUserList);
routerList.get("/user/all", toDoListController.takeUser);
routerList.get("/user?",toDoListController.searchUser)
routerList.get("/user/:userId", toDoListController.handleUserById);
routerList.put("/user/edit/:userId", toDoListController.editUserById);

//Criar Tarefas
routerList.get("/task?", toDoListController.takeTaskByUser);
routerList.post("/task/:user_id", toDoListController.createTask);
routerList.delete("/task/:idTask", toDoListController.deteleTaskById);

export default routerList;
