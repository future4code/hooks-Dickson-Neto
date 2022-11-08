import { CookenuDT } from "../data/CokeenuDatabase";
import { loginUserDTO, signupUserDTO } from "../model/interfaces";

import { signupUser } from "../model/types";
import { Authentication } from "../services/Authentication";
import { IdGenerator } from "../services/idGenerator";

const idGenerator = new IdGenerator() 
const authentication = new Authentication()
const cookenuDT = new CookenuDT()
export class CookenuBS{
    constructor(private cookenuDT : CookenuDT){}

    async signupUser(input : signupUserDTO){
        try{
            const {name , email , password} = input

            if(!name || !email || !password){
                throw new Error("Necessario preencher nome , email ou password")
            }

            if(password.length <= 6){
                throw new Error("Caracters Insuficientes")
            }

            if(!email.includes("@")){
                throw new Error("Email invalido para cadastro")
            }

            const isValidateEmail = await cookenuDT.getInformation()

            if(isValidateEmail[0].email === email){
                throw new Error("Email já cadastrado")
            }

            const id = idGenerator.generateId()

            const signup : signupUser = {
                id : id,
                name,
                email,
                password,
            }

            await this.cookenuDT.signup(signup)

            const token = authentication.generateToken({id})
            return token

        }catch (error:any){
            throw new Error(error.message)
        }
    }
    
    async login(input : loginUserDTO){
        try{
            const {email , password} = input

            if(!email || !password){
                throw new Error("Necessario preencher os campos email e password")
            }
            if(!email.includes("@")){
                throw new Error("Email invalido")
            }
    
            const getInfo = await cookenuDT.getInformation()
    
            if(getInfo[0].email != email){
                throw new Error("Email invalido")
            }
    
            if(getInfo[0].password != password){
                throw new Error("Senha incorreta")
            }
    
            const token = authentication.generateToken(getInfo[0].id)

            return token
        }catch (error: any) {
            throw new Error(error.message);
        }
    }
     
    async userInformation(input : any){
        try{
            const {token} = input

            const tokenTeste = authentication.getTokenData(token)

            if(!tokenTeste){
                throw new Error("Necessario informar o token de login")
            }

            const information = await cookenuDT.getInformation()

            return information


        }catch(error : any){
            throw new Error(error.message);
        }
    }
}