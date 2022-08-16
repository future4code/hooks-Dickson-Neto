import express from 'express'
import cors from 'cors'


const app = express()
app.use(express.json())
app.use(cors())


//EXERCICIO1
app.get('/',(req , res) =>{
    res.send('Olaa')
})


//Exercicio 2
type Users = {
    id : number,
    name : string, 
    phone : number,
    email : string , 
    website : string
    
}

//Exercicio 3

const arrayUsuarios : Users[] = [
    {
        id: 1,
        name: "Leanne Graham",
        phone:  1-770-736-8031,
        email: "Sincero@april.biz",
        website : "hildegard.org",
       
    },
    {
    id : 2,
    name : "Ervin Howell", 
    phone : 10-692-6593 ,
    email : "Shanna@melissa.tv.com" , 
    website : "anastasia.net",

    },
    {
        id : 3,
        name : "Clementine Bauch", 
        phone :1-463-123-4447,
        email : "Nathan@yesenia.net" , 
        website : "ramiro.info",
    }
]

//Exercicio4

app.get('/users' , (req , res) =>{
    res.send({arrayUsuarios})
})

//Exercicio5 
type Posts = {
    userId : number,
    id : number ,
    title : string,
    body : string,
    
}


//Exercicio 6 
//Fora, captando o id do usuario que vai fazer o post em questao, ou mostrando os que ja foram feitos 
const postsUsers : Posts[] = [
    {
     userId : 1,
     id : 1,
     title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
     userId : 2,
     id: 1,
     title: "qui est esse",
     body :  "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
     userId : 3,
     id: 1,
     title: "qui est esse",
     body :  "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }
 
 ]

 //Exercicio7
 //Pegando todos os posts criados.
 app.get('/posts' , (req,res) =>{
    res.send({postsUsers})
 })
//Exercicio 8 
//Pegar os posts de um usuario especifico

app.get('/posts/:clientId' , (req , res)=>{
   const clientId = Number(req.params.clientId)
    const posts = postsUsers.map((user)=>{
        if(user.userId === clientId ){
           res.send(user)
        }
    })
res.send(posts)
})
   
//   const postClient = postsUsers.map((post)=>{
//     if(post.userId === clientId){
//         return(post)
//     }
//   }).flat(1)
//   res.send(postClient)


app.listen(3003 ,  () =>{
    console.log("O servidor esta online")
})