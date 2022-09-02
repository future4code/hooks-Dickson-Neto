USE `hooks-4313238-dickson-neto`;
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Forms(
	id  CHAR(20) NOT NULL PRIMARY KEY ,
    name VARCHAR(50) NOT NULL,
    title VARCHAR(50) NOT NULL,
    data DATE NOT NULL
); 

SELECT * FROM Forms;

/*ADICIONANDO OS VALORES A TABELA */

INSERT INTO Forms (id , name , title , data)
VALUES ( "1","LabeSky", "LSy", "2023/10/05"),
	( "2",	 "Labefy",	  "LFy",	 "2024/01/06"),
    (	"3",	 "AstroZoom",  "AZm",  "2022/12/20");
    
    /*Apagar o title da tabela*/
ALTER TABLE Forms
DROP COLUMN title;

DESCRIBE Forms;
  /*Modificar nome da coluna date para duoDate*/
ALTER TABLE Forms
CHANGE data duoDATE DATE NOT NULL;

DESCRIBE Forms;

  /*Exercicio 4*/
  
  /*Adicionando uma nova coluna na tabela */
ALTER TABLE Forms
ADD description VARCHAR(200) NOT NULL;
  /*Adicionando valores no description */
  
 UPDATE Forms
SET description = "Projeto de sistema em nuvem da Labenu."
WHERE id = "1";

 UPDATE Forms
SET description ="Projeto de sistema de gerenciamento de músicas da Labenu."
WHERE id = "2";

 UPDATE Forms
SET description = "Projeto de rede de comunicação da Labenu."
WHERE id = "3";

SELECT * FROM Forms;

SELECT duoDATE
FROM Forms
ORDER BY duoDATE ASC;

SELECT name , duoDate
FROM Forms
ORDER BY duoDATE;



