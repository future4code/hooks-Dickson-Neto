
import { Router } from "express";
import { TodoListController } from "../controllers/TodoList.controller";


const routerList = Router()
const toDoListController = new TodoListController()

routerList.post("/user" , toDoListController.createUserList)
routerList.get("/user/:userId",toDoListController.handleUserById)
routerList.put("/user/edit/:userId" , toDoListController.editUserById)

//Criar Tarefas
routerList.post("/task/:user_id" , toDoListController.createTask)


export default routerList;