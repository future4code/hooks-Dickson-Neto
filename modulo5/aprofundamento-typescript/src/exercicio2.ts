const idades = [ 12 , 34, 12, 45 ,54]
//numerosOrdenados (entrada) e estatisticas ( saida) =  array e objeto de number

function obterEstatisticas(numeros : number[]) {

    const numerosOrdenados : number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type amostraDeIdades =  {

    numeros: number[],

    obterEstatisticas: (numeros : number) => {maior : number , menor:number, media : number}
}

console.log(obterEstatisticas(idades))