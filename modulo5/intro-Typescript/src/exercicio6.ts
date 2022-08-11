
const Tabuada = (num1:number , num2:number) =>{
    const soma : number =  num1 + num2;
    const subt : number = num1 - num2;
    const mult : number = num1 *num2
    console.log([`Soma : ${soma}, Subtração : ${subt} , Multiplicação: ${mult}`])
    if(num1 > num2){
        return(`O maior valor é ${num1}`)
    }else{
        return(`O numero maior é ${num2}`)
    }
}

console.log(Tabuada(30,10))