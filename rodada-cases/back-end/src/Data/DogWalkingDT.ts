import { Database } from "../Connection/connection";
import { DogWalkingModel } from "../Model/DogWalkingModel";
import { DataProcessingDTO, NewDateModel } from "../Model/NewDateModel";
import { TourStatusModel } from "../Model/TourStatusModel";


export class DogWalkingDT extends Database{
     TABLE_NAME = "create_dogwalking"
    public async createTour(walking : DogWalkingModel) : Promise<void>{
        return Database.connection(this.TABLE_NAME)
        .insert({
            id : walking.getId(),
            name : walking.getName(),
            price : walking.getPrice(),
            ride_duration : walking.getRideDuration(),
            appointment_date : walking.getAppointmentDate(),
            qty_pet : walking.getQtyPet(),
            latitude : walking.getLatitude(),
            longitude : walking.getLongitude(),
            start_time : walking.getStartTime(),
            end_time : walking.getEndTime(),
        })
    }

    public async rideTime( name : string){
        return Database.connection(this.TABLE_NAME).select( "name" ,"ride_duration")
        .where("name" , "like" , `%${name}%`)
    }

    public async indexTour(input : NewDateModel) : Promise<DataProcessingDTO[]>{
        return Database.connection(this.TABLE_NAME).select("*").where("appointment_date" ,"like" , `%${input.getQuery()}%`).orderBy("appointment_date")
    }

    public async getInfor(idUser : string){
        return Database.connection(this.TABLE_NAME).select("*").where({id : idUser})
    }

    public statusTour(walking : TourStatusModel) {
        return Database.connection(this.TABLE_NAME).update({"status" : walking.getTourStatus()}).where({id : walking.getIdClient()})
    }
}