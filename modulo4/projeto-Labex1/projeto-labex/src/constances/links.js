export const URL_BASE = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/dickson-freitas-hooks"
export const URL_COUNTRY = "https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome"
export  const headers = {
    headers : {
        auth : localStorage.getItem("token")
    }
}

