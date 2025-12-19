/*
importação de biblioteca, dentro da variável prompt, sendo possível depois, instanciar variável prompt, e utilizar propriedade da biblioteca
 */
const prompt = require('readline-sync');


/*
EXERCÍCIOS;
*/

/*
estou atribuindo a váriavel ''saldo'' = sendo um dado do tipo numero, definimos a transformação em Number(). a biblioteca inserida em ''prompt'' será utilizada. Depois, sinalizar como pergunta no comando ''question'', definindo a ''pergunta''!
*/
let saldo = Number(prompt.question('Qual o seu saldo?'));

/*
imprimir no terminal, o saldo e o tipo da string (será do tipo Number devido a função anterior)
*/

console.log(saldo, typeof saldo);

/*
CONDIÇÕES
*/

while (saldo <= 0) {
   let saldo = Number(prompt.question('por favor, informe um valor valido'));
}

console.log (saldo);