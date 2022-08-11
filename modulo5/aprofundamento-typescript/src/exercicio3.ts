 type Posts = {
    autor : string,
    texto : string
 }

const posts : Posts[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

 

  function buscarPostsPorAutor(posts : Posts[], autorInformado ? : string) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }

  // A entrada é o array de objetos mandado para função e a saida é o Post do autor informado 



  console.log(buscarPostsPorAutor(posts , "Lord Voldemort")) 