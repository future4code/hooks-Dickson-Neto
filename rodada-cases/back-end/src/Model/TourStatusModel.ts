
export class TourStatusModel{
    constructor(
        private idClient : string,
        private tourStatus : string
    ){}


    public getIdClient() : string{
        return this.idClient
    }

    public getTourStatus() : string{
        return this.tourStatus
    }

    public settourStatus(input : string){
        this.tourStatus = input
    }


    public static toData(data? : any) : TourStatusModel | undefined{
        return(
            data && new TourStatusModel(
                data.idClient,
                data.tourStatus || data.start_walk || data.finish_walk
            )
        )
    }
}


export interface TourStatusDTO{
    idClient : string,
    tourStatus : string,
}

