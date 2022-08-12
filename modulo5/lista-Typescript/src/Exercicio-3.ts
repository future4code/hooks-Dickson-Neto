enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const getFilms = (nome : string , anoLançamento : number , genero:GENERO , pontos?: number)=>{
    if(pontos){
        console.log(`Nome do filme : ${nome} ,  Ano de Lançamento : ${anoLançamento} , o seu genero é ${genero}  pontuação ${pontos}.`)
    }else{
        console.log(`Nome do filme : ${nome} ,  Ano de Lançamento : ${anoLançamento} , o seu genero é ${genero}.`)
    
    }
   
}


getFilms("Duna" , 2023 ,GENERO.ROMANCE)
