 
    const nome : string  = process.argv[2]
    const idade : string = process.argv[3]
    const idadeSplit = idade.split("/")
   
    
   

    console.log(` Olá me chamo ${nome}, nasci no dia ${idadeSplit[0]} do mês de ${idadeSplit[1]} do ano de ${idadeSplit[2]}`)