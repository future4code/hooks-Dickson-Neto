import { Request, Response } from "express";
import moment from "moment";
import { DogWalkingBS } from "../Business/DogWalkingBussiness";
import { Database } from "../Connection/connection";
import { DogWalkingDT } from "../Data/DogWalkingDT";
import { DogWalkingDTO } from "../Model/DogWalkingModel";
import {  DataProcessingDTO } from "../Model/NewDateModel";
import { TourStatusDTO } from "../Model/TourStatusModel";
import { IdGenerator } from "../Services/IdGenerator";


const tourBS = new DogWalkingBS(new DogWalkingDT , new IdGenerator)


export class DogWalkingCT {
    async createTour( req : Request ,  res: Response){
        try{
            const input : DogWalkingDTO = {
                name : req.body.name,
                rideDuration : req.body.rideDuration,
                appointmentDate : req.body.appointmentDate as string,
                qtyPet : req.body.qtyPet,
                latitude : req.body.latitude,
                longitude : req.body.longitude,
                startTime : req.body.startTime ,
                endTime : req.body.endTime,
            }

            let value  = 0  as number
            if(input.rideDuration == "30M"){
                value = 25 
            }
            
            if(input.rideDuration == "60M"){
                value = 35 
            }
            if(input.rideDuration == "30M" && input.qtyPet > 1){
                value = 25 + (15 * input.qtyPet)
            }

            if(input.rideDuration == "60M" && input.qtyPet > 1){
                value = 35 + (20 * input.qtyPet)
            }
        
     
            await tourBS.createTour(input , value)
            
            res.send({message : `${input.name} Your tour has been successfully booked, amount payable R$ ${value}`})
        

            

        }catch(error: any){
            res.send(error.message)
        }
    }

    async rideTime(req : Request , res : Response){
        try{

            let name = req.query.name as string

            if(!name){
                name = "%"
            }

            const result = await tourBS.rideTime(name)
        
            res.send(result)

        }catch(error : any){
            res.send(error.message)
        }
    }

    async indexTour(req : Request , res : Response){
        try {
            let queryDate =  req.query.data as string
            
            if(!queryDate){
                queryDate = "%"
           }

            const input : DataProcessingDTO = {
                queryDate,
            }

            const result = await tourBS.indexTour(input)
           
            res.send(result)
        } catch (error : any) {
            res.send(error.message)
        }
    }

    async startWalk ( req : Request , res : Response){
        try {
       
            const idClient = req.params.idClient
            const startWalk = req.body.startWalk 
            const input : TourStatusDTO = {
              idClient,
             tourStatus : startWalk
            }
            
           const result =  await tourBS.startWalk(input)

            res.send(result)
        } catch (error : any) {
            res.send(error.message)
        }
    }

    async finishWalk(req : Request , res : Response){
        try {
       
            const idClient = req.params.idClient
            const finishWalk = req.body.finishWalk 
            const input : TourStatusDTO = {
              idClient,
              tourStatus : finishWalk
            }

          
            const result = await tourBS.finishWalk(input)

            res.send(result)
        } catch (error : any) {
            res.send(error.message)
        }
    }
}