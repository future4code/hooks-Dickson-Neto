import * as bcrypt from 'bcrypt'


export class EncryptPassword{
    async hash(plaintext : string){
        const count = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(count)

        return bcrypt.hash(plaintext, salt)
    }

    async comparePassword(plaintext : string , cyperText : string) : Promise<boolean>{

        return bcrypt.compare(plaintext , cyperText)
    }
}