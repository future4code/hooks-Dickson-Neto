# Case Legado II - Pet Love (Back-end)
![Petlove](../back-end/src/img/petlove_logo.png)
Serviço de Passeio


## Indice

- <a href="#o-desfio">O desafio</a>
- <a  href="#endpoints" >EndPoints</a>
- <a  href="#tecnologias-utilizadas">Tecnologias Utilizadas</a>
- <a  href="#como-rodar-esse-projeto">Como rodar o projeto</a>



## O desafio
Recentemente lançamos um serviço novo de passeios. Seu desafio será pensar em uma estrutura que suporte usuários a pedir esse novo serviço para seus peludos. Algumas observações:

Fique a vontade para montar o schema do banco como desejar. Apenas a entidade Dog Walking é obrigatória. Além disso, utilize o RDBS de sua preferência;

Esta entidade deve conter: status, data de agendamento, preço, duração (30 ou 60 min), latitude, longitude, pets, horário de início e término; Fique a vontade para adicionar qualquer atributo de sua escolha;

## EndPoints
```bash
# Create
"http://http://localhost:3003/create"
Solicitação de um novo passeio.
```

```bash
# Show
"http://http://localhost:3003/show?name "

Recebe um nome como query params e retorna o tempo de passeio do usuario pesquisado ou todos os usuarios que fizeram uma solicitação.
```

```bash
# Index
"http://http://localhost:3003/index?data"
Recebe uma data como query params e retorna todos os usuario que fizeram a solicitação do passeio para o dia, ou todos os usuarios que fizeram uma solicitação.
```

```bash
#Start Walk
"http://http://localhost:3003/startWalk/:idClient"
Recebe o id do cliente como parametro e inicia a corrida.

```

```bash
# Finish Walk
"http://http://localhost:3003/startWalk/:idClient"
Recebe o id do cliente como parametro e finaliza a corrida.

```

## Tecnologias Utilizadas 

1. ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

2. ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
3. ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
4. ![MySql](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)


## Como rodar esse projeto?
``` bash
# Clone esse repositório
$ git clone linkrepo

# Acesse a pasta do projeto no seu computador
$ cd backend

# Instale as dependências
$ npm run dev

# A aplicação ira iniciar na porta 3003, acesse pelo navegador
$ http://localhost:3000/

```

## Documentação
<a href="https://documenter.getpostman.com/view/21068479/2s8ZDbVLPG">Postman</a>
