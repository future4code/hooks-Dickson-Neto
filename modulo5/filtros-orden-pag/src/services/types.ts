
enum Profession {
    TEACHER = "TEACHER",
    OPERATION = "OPERATION",
    CX = "CX"
}

export type Users ={
    name : string,
    email : string,
    type : Profession[]
}