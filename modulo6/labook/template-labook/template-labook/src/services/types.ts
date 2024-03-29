export type authenticationData = {
    id: string
 }
 
 export type user = {
    name: string,
    email: string,
    password: string
 }
 
 export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }
 
 export type post = {
    photo: string,
    description: string,
    type: POST_TYPES,
    author_id: string
 }
 
 export type makeFriend = {
   user_id : string
   friend_id : string
 }