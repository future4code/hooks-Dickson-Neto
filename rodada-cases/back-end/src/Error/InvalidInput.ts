import { BaseError } from "./BaseError";

export class InvalidInput extends BaseError{
    constructor(message : string){
        super(message , 417)
    }
}