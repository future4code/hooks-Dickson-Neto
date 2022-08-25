import { v4 as idProduct } from "uuid";

export type Products = {
    id: string,
    name : string,
    price : number;

}

export let Cafes: Products[] = [
    {
        id:"4bc8e581-3c1f-4984-b1d4-0e8bca780218",
        name:  "Melitta" ,
        price : 89
    },
    {
        id: "f59acff1-b909-4407-8ea7-93eeec80c022",
        name:  "Pimpinela" ,
        price : 82
    },
    {
        id: "563b9f4a-71ee-484a-9113-7bd847e1c7eb",
        name:  " 3 Corações" ,
        price : 80
    }
]