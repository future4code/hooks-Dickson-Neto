import { DogWalkingBS } from "../src/Business/DogWalkingBussiness";
import { DogWalkingDT } from "../src/Data/DogWalkingDT";
import { DogWalkingDTO } from "../src/Model/DogWalkingModel";
import { DataProcessingDTO } from "../src/Model/NewDateModel";
import { TourStatusModel } from "../src/Model/TourStatusModel";



const walkingDatabase = {
    createTour : jest.fn(async( input : DogWalkingDTO) =>{}),
    rideTime : jest.fn((name : string) =>{
        if(name){
            return {
                name : "Dickson",
                ride_duration : "60M"
            }
        } 
    }),

    // indexTour : jest.fn(async(date? : string) =>{
    //     if(date){
    //         return{
    //             data: "15/03/2023"
    //         } as unknown as DataProcessingDTO
    //     }
          
        
    // })

    startWalk : jest.fn(async(input : TourStatusModel) =>{
        if(input){
           
            return{
               
                    idClient : "00f95dad-dd18-476c-a6b7-9414e754a01d",
                    tourStatus : "No caminho"
            
            }
        }
    }),

    finishWalk : jest.fn(async(input : TourStatusModel) =>{
        if(input){
           
            return{
               
                    idClient : "00f95dad-dd18-476c-a6b7-9414e754a01d",
                    tourStatus : "Corrida Finalizada"
            
            }
        }
    })
}

const idGenerate = {
    generate : jest.fn(() => "eu_vou_aprender_teste")
}

const walkingBussines = new DogWalkingBS(
    DogWalkingDT as any,
    idGenerate as any,
)


describe("Marcação de um passeio" , () =>{
    test("Test for missing parameters" , async() =>{
      
        const input = {
            "rideDuration" : "60M",
            "appointmentDate" : "15/03/2023",
            "qtyPet" : 2,
            "latitude" : "30N03",
            "longitude" : "30N02",
            "startTime" : "13:40",
            "endTime" : "14:10"
        } as DogWalkingDTO


        try {
            await walkingDatabase.createTour(input)
        } catch(error:any){
            expect(error.message).toBe("Invalid input to create tour")
            expect(error.code).toBe(417)
        }
    })


    test("Testando se o tempo para a corrida esta correto" , async() =>{

       
        const input = {
            "name" : "Dickson",
            "rideDuration" : "50M",
            "appointmentDate" : "15/03/2023",
            "qtyPet" : 2,
            "latitude" : "30N03",
            "longitude" : "30N02",
            "startTime" : "13:40",
            "endTime" : "14:10"
        } as DogWalkingDTO

        try {
            await walkingDatabase.createTour(input)
        } catch(error:any){
            expect(error.message).toBe("Invalid amount of time")
            expect(error.code).toBe(417)
        }
    })
})

describe("Mostrar a duração de corrida" , () =>{
    test("Quando não vem nome por parametro" , async() =>{


        try{
             walkingDatabase.rideTime("Jon")
        }catch(error: any){
            expect(error.message).toBe("Customer name required")
            expect(error.code).toBe(417)
        }
        
    })
})

describe("Mudança de status para iniciar corrida" , () =>{
    test("Status para iniciar corrida errado" , async() =>{

        const input = {
            idClient : "00f95dad-dd18-476c-a6b7-9414e754a01d",
            tourStatus : "No"
        }
        try {
             await walkingBussines.startWalk(input)
        } catch (error : any) {
            expect(error.message).toBe("Error when starting the race")
        }
    })

    test("Se o id do cliente não for passado" , async() =>{
        const input = {
            idClient : ":idClient",
            tourStatus : "No"
        }
        try {
             await walkingBussines.startWalk(input)
        } catch (error : any) {
            expect(error.message).toBe("Need to inform the id of the tour")
        }
    })
})

describe("Mudança de status para finalizar corrida" , () =>{
    test("Status para iniciar corrida errado" , async() =>{

        const input = {
            idClient : "00f95dad-dd18-476c-a6b7-9414e754a01d",
            tourStatus : "No"
        }
        try {
             await walkingBussines.finishWalk(input)
        } catch (error : any) {
            expect(error.message).toBe("Error when finishing race")
        }
    })

    test("Se o id do cliente não for passado" , async() =>{
        const input = {
            idClient : ":idClient",
            tourStatus : "No"
        }
        try {
             await walkingBussines.finishWalk(input)
        } catch (error : any) {
            expect(error.message).toBe("Need to inform the id of the tour")
        }
    })

    test("Se não for passado o status pelo body" , async() =>{
        const input = {
            idClient : "00f95dad-dd18-476c-a6b7-9414e754a01d",
            tourStatus : ""
        }
        try {
             await walkingBussines.finishWalk(input)
        } catch (error : any) {
            expect(error.message).toBe("Inform the status of the race")
        }
    })
})