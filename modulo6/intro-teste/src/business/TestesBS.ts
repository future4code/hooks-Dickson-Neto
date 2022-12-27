import { TestesDT } from "../database/TestesDT";
import { loginUserDTO, registrationUserDTO, user } from "../models/types";
import { Authenticator } from "../services/Autentication";
import { IdGenerator } from "../services/IdGenerate";


const authenticator = new Authenticator()
const idGenerator = new IdGenerator()

export class TesteBS{
    constructor(private testesDT : TestesDT){}
    async registrationUser(input : registrationUserDTO){
        try{
        const {email , password} = input

            if(!email || !password){throw new Error("Necessario inserir um email e uma senha")}
            if(!email.includes("@")){
                throw new Error("Email invalido")
            }
            if(password.length < 6){
                throw new Error("Caracters Insuficientes")  
            }

            const id = idGenerator.generateId()

            const user : user = {
                id,
                email,
                password
            }

            await this.testesDT.registrationUser(user)

            const token = authenticator.generateToken({id})
            return token
        }catch (error: any) {
            throw new Error(error.message);
          }
    }

    async login(input : loginUserDTO) {
        try{
            const{email , password} = input
            if(!email || !password){throw new Error("Necessario inserir um email e uma senha")}

            if(!email.includes("@")){
                throw new Error("Email invalido")
            }
            const testeDT = new TestesDT()
            const getEmail = await testeDT.getUserByEmail(email)

            const userPassword = getEmail[0].password
            const userId = getEmail[0].id


            if(userPassword !== password) {
                throw new Error("Senha incorreta")
              }
              const token = authenticator.generateToken({id: userId})

              return token
        }catch (error: any) {
            throw new Error(error.message);
          }
    }
}