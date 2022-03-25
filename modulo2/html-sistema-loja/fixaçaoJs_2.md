```
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  const precoMaca = 1.30
  let  novoPreco = 0
  
  if(quantidade < 12){
    novoPreco = quantidade * precoMaca
  }else if(quantidade >= 12){
    novoPreco = quantidade * 1.00
  }
  return novoPreco
} 
 ```