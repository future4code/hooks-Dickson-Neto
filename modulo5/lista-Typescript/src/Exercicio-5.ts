enum Função {
    USUARIO = "user",
    ADMIN = "admin"
}

type User = {
    name : string,
    email: string
    role : Função 
}
const user : User[] = [
	{name: "Rogério", email: "roger@email.com", role: Função.USUARIO},
	{name: "Ademir", email: "ademir@email.com", role: Função.ADMIN},
	{name: "Aline", email: "aline@email.com", role: Função.USUARIO},
	{name: "Jéssica", email: "jessica@email.com", role: Função.USUARIO},  
	{name: "Adilson", email: "adilson@email.com", role: Função.USUARIO},  
	{name: "Carina", email: "carina@email.com", role: Função.ADMIN}      
] 


const getAdminEmail = ((usuarios : User[]) => {
    return usuarios.filter((item)=>{
       return item.role === "admin"
    }).map((item)=>{
        return item.email
    })
})

console.log(getAdminEmail(user))