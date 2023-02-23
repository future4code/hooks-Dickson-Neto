
import { DogWalkingDT } from "../Data/DogWalkingDT";
import { InvalidError } from "../Error/InvalidDate";
import { InvalidInput } from "../Error/InvalidInput";
import { DogWalkingDTO , DogWalkingModel } from "../Model/DogWalkingModel";
import {  DataProcessingDTO, NewDateModel } from "../Model/NewDateModel";
import { TourStatusDTO, TourStatusModel } from "../Model/TourStatusModel";
import { IdGenerator } from "../Services/IdGenerator";



export class DogWalkingBS{
    constructor(
        private tourDT : DogWalkingDT,
        private idGenerate : IdGenerator,
        ){}

    async createTour( input : DogWalkingDTO , value : number){
        try{
            let {name , rideDuration , appointmentDate , qtyPet , latitude , longitude , startTime , endTime} = input

            
            if(!name || !rideDuration || !appointmentDate || !qtyPet || !latitude || !latitude || !longitude || !startTime || !endTime){
                throw new InvalidInput("Invalid input to create tour")
            }

            if(rideDuration !== "30M" && rideDuration !== "60M"){
                throw new InvalidInput("Invalid amount of time")
            }
            
            await this.tourDT.createTour(
                DogWalkingModel.toWalking({
                    id : this.idGenerate.generate(),
                    ...input,
                    price : value
                })!
            )
           
            return (input)
        }catch( error : any){
            throw new Error(error.message);
        }
        
    }
     
    async rideTime(name : string){
        try {
        if(!name){
            throw new InvalidInput("Customer name required")
        }
            const result = await this.tourDT.rideTime(name)

            return result
        } catch (error : any) {
            
        }
  
    }

    async indexTour(input : DataProcessingDTO) : Promise<DataProcessingDTO[]> {
        try {
            let { queryDate } = input

            
            if(queryDate.includes("-")){
                throw new InvalidError("Enter the date in DD/MM/YYY format")
            }
       
            // if(queryDate < checkDate[0] ){
            //     throw new InvalidError("Enter a valid date")
            // }

            const result = await this.tourDT.indexTour(
                NewDateModel.toData({
                    ...input
                })!
            )

            
           return(result)
        } catch (error : any) {
            throw new Error(error.message)
        }
    }

    async startWalk(input : TourStatusDTO) {
        try {
            const {idClient , tourStatus} = input


            if(idClient === ":idClient"){
                throw new Error("Need to inform the id of the tour")
            }

            const idUser = await this.tourDT.getInfor(idClient)
            const nameClient = idUser[0].name

            if(idUser.length === 0){
                throw new Error("Invalid user")
            }

            if(idUser[0].status != "On Hold"){
                throw new Error("The race is already started")
            }

            if(tourStatus !== "No caminho"){
                throw new Error ("Error when starting the race")
            }
           

       await this.tourDT.statusTour(
        TourStatusModel.toData({
            ...input
        })!
      )
            
            return(` ${nameClient} race has begun`)

        } catch (error : any) {
            throw new Error(error.message)
        }
    } 

    async finishWalk(input : TourStatusDTO) {
        try {
            const {idClient , tourStatus} = input


            if(idClient === ":idClient"){
                throw new Error("Need to inform the id of the tour")
            }

            const idUser = await this.tourDT.getInfor(idClient)
            const nameClient = idUser[0].name
            
            if(idUser.length === 0){
                throw new Error("Invalid user")
            }
            
            if(!tourStatus){
                throw new Error("Inform the status of the race")
            }

            if(idUser[0].status != "No caminho"){
                throw new Error ("Need to start the race" )
            }

            if(tourStatus != "Corrida Finalizada"){
                throw new Error("Error when finishing race")
            }


           await this.tourDT.statusTour(
                TourStatusModel.toData({
                    ...input
                })!
            )

            
            return(`${nameClient} race has ended`)

        } catch (error : any) {
            throw new Error(error.message)
        }
    } 

}