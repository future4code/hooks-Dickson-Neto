// a) utilizando o argv, a partir do 2, pq o 0 e o 1 é padrao.

const name = process.argv[2]
const age = Number(process.argv[3])
const futureAge = Number(age + 7 )

console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${futureAge}`)