type listClient = {
    cliente : string,
    saldoTotal : number,
    debitos : number[]
}
const listClient : listClient[] =[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const debtClient = listClient.map((debt)=>{
    let debitoClient = [debt.debitos.reduce((prevVal , elem)=> prevVal + elem , 0)]
    debt.debitos = debitoClient
    debt.saldoTotal =  debt.saldoTotal - debt.debitos[0]
    debt.debitos = []

 
})

const saldoClient = listClient.filter((debt)=>{
    return(debt.saldoTotal < 0)
})

console.log(saldoClient)
