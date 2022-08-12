enum Setor {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type Colaborador = {
    nome : string,
    salário:number,
    setor: Setor,
    presencial : boolean
}

const Colaboradores : Colaborador[]= [
	{ nome: "Marcos", salário: 2500, setor: Setor.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: Setor.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: Setor.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: Setor.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: Setor.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: Setor.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: Setor.MARKETING, presencial: true }
]

const getMarketing = ((pessoa : Colaborador[]) =>{
    return pessoa.filter((item)=>{
        return item.setor === "marketing" && item.presencial === true
    })
})

console.log(getMarketing(Colaboradores))
