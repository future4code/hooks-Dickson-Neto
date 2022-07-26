import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("retorna numeros iguais",()=>{
        const chekResult = checaItensDuplicados([1,2,3,4,2])
        expect(chekResult).toEqual(true)
    })

    test("retorna false para duplicados",()=>{
        const checkResult = checaItensDuplicados(["a" , "b" , "c" , "d" , "a"])

        expect(checkResult).toEqual(true)
    })



    test("retorna true para duplicados",()=>{
        const checkResult = checaItensDuplicados(["f", "d", "e", "f"])

        expect(checkResult).toEqual(true)
    })

    test("retorna false para duplicados",()=>{
        const checkResult = checaItensDuplicados(["a" , "b" , "c" , "d" , "a"])

        expect(checkResult).toEqual(false)
    })
});
