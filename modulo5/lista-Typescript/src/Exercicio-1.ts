
   
    
   const addName = (paramer:string, idade : string ) =>{
    const name : string = paramer
    const age : string = idade
    const split = age.split("/")
    console.log(` Olá me chamo ${name}, nasci no dia ${split[0]} do mês  ${split[1]} do ano de ${split[2]}`)
   }

   addName("Dickson" , "23/02/1999")
