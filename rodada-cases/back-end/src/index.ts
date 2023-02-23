import express from 'express'
import cors from 'cors'
import dogWalking from './Routes/DogWalkingRouter'



const index = express()

index.use(express.json())
index.use(cors())


index.use("" , dogWalking)


export default index