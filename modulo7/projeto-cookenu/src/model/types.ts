export type AuthenticationData = {
    id : string
}

export type signupUser = {
    id : string,
    name : string,
    email : string,
    password : string,
}

export type createRecipes = {
    id : string,
    title : string,
    description : string,
    preparation_mode : string,
    creation_At : string,
    user_id : string,
}

export type addFriends = {
    user : string,
    be_friends : string
}