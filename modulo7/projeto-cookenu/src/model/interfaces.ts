export interface signupUserDTO{
    name : string,
    email : string,
    password: string
}

export interface loginUserDTO{
    email : string,
    password : string
}

export interface createRecipesDTO{
    title : string,
    description : string,
    preparationMode : string,
    creationAt : string,

}

export interface FriendsDTO{
    user : string,
    friend : string,
}

export interface timeLineDTO{
    token : string,
    friends : string,
}