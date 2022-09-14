import { Users } from "../services/types";



export interface ExRepository{
    getUser() : Promise<Users[]>
    filterUser(name : string ) : Promise<Users[]>;
    typeUser(type: string) : Promise<Users[]>;

}