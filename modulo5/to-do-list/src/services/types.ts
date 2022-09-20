
export enum StatusList{
    TO_DO = "TO_DO", //a FAZER,
    DOING = "DOING", //FAZENDO
    DONE = "DONE" // FEITO
}

export type TodoList = {
    nome : string
    apelido : string
    email : string 
}

export type ListTask = {
    titulo : string
    limit_date : string
    criador_user_id : string
    status : StatusList
    descrição : string
}

export type TodoListResponsibleTask = {
    task_id : string
   responsable_user_id : string

}