import { CookenuDT } from "../data/CokeenuDatabase"
import { InvalidEmail, invalidFields, InvalidPassword, InvalidToken, RequiredFiels } from "../error/CustomError"
import { loginUserDTO, signupUserDTO } from "../model/interfaces"
import { signupUser } from "../model/types"
import { Authentication } from "../services/Authentication"
import { EncryptPassword } from "../services/EncryptPassword"
import { IdGenerator } from "../services/idGenerator"



const idGenerator = new IdGenerator() 
const authentication = new Authentication()
const hash = new EncryptPassword()
const cookenuDT = new CookenuDT()

export class UserBS{
    constructor(  private cookenuDT : CookenuDT ){}
    async signupUser(input : signupUserDTO){
        try{
            const {name , email , password} = input

            if(!name || !email || !password){
                throw new RequiredFiels()
            }

            if(password.length < 6){
                throw new InvalidPassword()
            }

            if(!email.includes("@")){
                throw new InvalidEmail()
            }

            const isValidateEmail = await cookenuDT.getInformation(email)

            // if(email === isValidateEmail[0].email ){
            //     throw new invalidUserEmail()
            // }

            const id = idGenerator.generateId()
            const encrypt = await hash.hash(password)

            const signup : signupUser = {
                id : id,
                name,
                email,
                password : encrypt
            }

            await this.cookenuDT.signup(signup)

            const token = authentication.generateToken(id)
            return token

        }catch (error:any){
            throw new Error(error.message)
        }
    }
    
    async login(input : loginUserDTO){
        try{
            const {email , password} = input

            if(!email || !password){
                throw new RequiredFiels()
            }

          
            if(!email.includes("@")){
                throw new InvalidEmail()
            }
    
            const getInfo = await cookenuDT.getInformation(email)
            console.log(getInfo)
            const isValidadePassword = await hash.comparePassword(password , getInfo[0].password )

            if(email !== getInfo[0].email){
                throw new invalidFields()
            }
        
             if(!isValidadePassword){
                    throw new InvalidPassword()
                }
    
            const token = authentication.generateToken(getInfo[0].id)

            return token
        }catch (error: any) {
            throw new Error(error.message);
        }
    }
     
    async userProfile(input : any){
        try{
            const {token} = input

            const userToken = authentication.tokenData(token)

            if(!userToken){
                throw new InvalidToken()
            }

            const information = await cookenuDT.userDetails(userToken.id)
            const detailsRecipes = await cookenuDT.getRecipesByUserId(userToken.id)


            return {information , detailsRecipes }


        }catch(error : any){
            throw new Error(error.message);
        }
    }

    async informationUser (id : string , token : string) {
        try{
            if(!id){
                throw new RequiredFiels()
            }
            if(!token){
                throw new InvalidToken()
            }

            const getToken : any = authentication.tokenData(token)

            const result = this.cookenuDT.userDetails(id)
            
            return result
        }catch(error : any){
            throw new Error(error.message);
        }
    }
}