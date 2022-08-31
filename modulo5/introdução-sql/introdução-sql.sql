SET SQL_SAFE_UPDATES = 0;
USE `hooks-4313238-dickson-neto`
/*1- Criação de uma tabela de usuarios */
CREATE TABLE Funcionarios(
	id INT NOT NULL PRIMARY KEY,
    name VARCHAR(200)  NOT NULL ,
    email VARCHAR(200)  NOT NULL 
);
/*Adicionando dados de usuarios*/
INSERT INTO Funcionarios(id , name , email)
VALUE("001" , "Luana" , "lua@lbn.com"),
	("002" , "Vinicius" , "vini@lbn.com"),
    ("003" , "Laura" , "lau@lbn.com");
    
/*Retorna os dados da tabela que ja foram adicionados*/
SELECT * FROM Funcionarios;
/*Retornar os dados pelo id e name ,  e troca o nome id Por indentifier com o comando AS*/
SELECT name,  id as identifier  FROM Funcionarios;

/*Retorna apenas as informações de Laura pelo id*/
SELECT * FROM Funcionarios
WHERE id = 3;

/*Retorna todos os usuarios com o A no nome*/
SELECT * FROM Funcionarios
WHERE name  LIKE "%a%";

/*Retorna usuarios que nao tenha R no nome mas tenha U no email*/
SELECT * FROM Funcionarios
WHERE name NOT LIKE "%r%"
AND  email LIKE "%u%";

/*Adicionando um novo usuario*/
INSERT INTO Funcionarios(id , name , email)
VALUE("004" , "Yuzo" , "yuzo@lbn.com");

/*Vendo se o novo usuario foi adicionado*/
SELECT * FROM Funcionarios
WHERE id = 4;

/*Deletando o usuario criado acima*/
DELETE FROM Funcionarios
WHERE id = 4;




/*
Error Code: 1046. No database selected Select the default DB to be used by double-clicking its name in the SCHEMAS list in the sidebar.
usar o USE `hooks-4313238-dickson-neto`
Error Code: 1075. Incorrect table definition; there can be only one auto column and it must be defined as a key
Faltou a chave primaria no id.
*/


