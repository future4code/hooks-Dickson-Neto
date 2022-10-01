

export type Users ={
    name : string,
    email : string,
    password : string
}

export type Products = {
    name : string,
    price : number,
    image_url : string
}

export type Purchases = {
    user_id : string,
    product_id : string,
    quantity : number
}

export type Adress = {
    users_id : string
    adress : string
}
