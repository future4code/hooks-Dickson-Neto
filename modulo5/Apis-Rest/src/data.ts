
export type User = {
    id : number,
    name : string,
    email: string,
    type: TYPE
    age: number
}

export enum TYPE{
    ADMIN = "Admin",
    NORMAL = "Normal"
}



export let consumer : User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: TYPE.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: TYPE.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type:TYPE.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: TYPE.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: TYPE.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: TYPE.ADMIN,
        age: 60
    }
]