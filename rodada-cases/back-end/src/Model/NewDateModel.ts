



export class NewDateModel{
    constructor(
        private queryDate : string,
        private currentDate : string,
    ){}


    public getQuery() : string{
        return this.queryDate
    }
    public getcurrentDate() : string{
        return this.currentDate
    }


    public setQuery(input : string){
        this.queryDate = input
    }
    public setcurrentDate(input : string){
        this.currentDate = input
    }


    public static toData(data? : any) : NewDateModel | undefined{
        return(
            data && new NewDateModel(
                data.queryDate,
                data.currentDate
            )
        )
    }
}


export interface DataProcessingDTO{
    queryDate : string,
}