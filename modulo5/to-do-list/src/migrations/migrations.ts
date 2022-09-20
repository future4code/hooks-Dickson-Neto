
// import connection from './connection'

// const ToDoList = async()=>{
//     try{
//         await connection.raw(`
//         CREATE TABLE  TodoListUser(
//             id VARCHAR(255) PRIMARY KEY, 
//             nome VARCHAR(50) NULL,
//             apelido VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(50) UNIQUE NOT NULL
//         );

//         CREATE TABLE TodoListTask(
//             id VARCHAR(255) PRIMARY KEY, 
//             titulo VARCHAR(100) NOT NULL,
//             descrição TEXT NOT NULL , status VARCHAR(255) DEFAULT "to_do",
//             limit_date DATE NOT NULL,
//             criador_user_id VARCHAR(100) NOT NULL,

//             FOREIGN KEY (criador_user_id) REFERENCES TodoListUser(id)
//         );

//         CREATE TABLE  TodoListResponsibleUserTaskRelation (
//         task_id VARCHAR(255),
//         responsible_user_id VARCHAR(255),
//         FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
//         FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
//     );
//         `)
//         console.log("Tabela criada com sucesso")

//     }catch (error : any){
//         console.log("Erro ao criar a tabela")
//         console.log(error.sqlMessage)
//     }
// }

// ToDoList().finally(()=> process.exit())