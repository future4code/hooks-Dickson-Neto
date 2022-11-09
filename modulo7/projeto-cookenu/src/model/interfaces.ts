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

export interface beFriendsDTO{
    user : string,
    beFriend : string,
}

export interface timeLineDTO{
    token : string,
    friends : string,
}