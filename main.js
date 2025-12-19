/*
importação de biblioteca, dentro da variável prompt, sendo possível depois, instanciar variável prompt, e utilizar propriedade da biblioteca
 */
const prompt = require('readline-sync');


console.log('**********Bem-Vindo**********');
console.log('feito por:')

const nome = 'Lívia';
for (let i = 0; i < nome.length; i++) {


   console.log(nome[i]);

}


console.log('**********LAÇOS CONDICIONAIS E NÃO ORDERNADOS**********');
/*
EXERCÍCIOS;
*/

/*
estou atribuindo a váriavel ''saldo'' = sendo um dado do tipo numero, definimos a transformação em Number(). a biblioteca inserida em ''prompt'' será utilizada. Depois, sinalizar como pergunta no comando ''question'', definindo a ''pergunta''!
*/
console.log('**********Gerador da String transformando em "Number", variavel "saldo" e tipo da String**********')
let saldo = Number(prompt.question('Qual o seu saldo? '));

/*
CONDIÇÕES: EXEMPLO 1, saldo negativo
*/

while (saldo < 0) {
   saldo = Number(prompt.question('por favor, informe um valor valido '));
}
console.log(saldo, typeof saldo);




/*
CONDIÇÕES: EXEMPLO 2, média das notas da turma, sem valor negativo de nota, possível apenas notas>0
*/

let somaDasNotas = 0; //incremento 
let qtdNotasValidas = 0; //incremento


console.log('**********Média Nota dos Anulos, condição de parada:valores negativos**********');
let notaDoAluno = Number(prompt.question('Por favor, informe as notas dos alunos! '));

while (notaDoAluno >= 0) {
   somaDasNotas += notaDoAluno; // incrementando acumulador
   qtdNotasValidas++; // pós incremento
   notaDoAluno = Number(prompt.question('Informe a proxima nota: '));
   console.log(notaDoAluno);
}

console.log('média das notas dos alunos: ', somaDasNotas / qtdNotasValidas);

/*
LAÇOS NUMÉRICOS:
estrutura de repetição numérica, numéro controlado de repetições.

estrutura do for: inicialização, condição de parada (condição de permanência), encremento.

let i: iterador. use dentro do for, ao invés da variável declarada no escopo. Isso evita com que o valor "saia" da estrutura, fique só na estrutura do for.
*/

console.log('**********LAÇOS NUMÉRICOS E ORDENADOS**********');
console.log('**********Percorrendo pelo indice**********');
for (let i = 0; i < 5; i++) {
   console.log(i);

}



/*EXERCÍCIO 1:
dessa lista controlada, qual o maior número?
*/

let maiorNumero = 0;
let numeroInformado = 0;

console.log('**********Qual o maior número dessa lista?**********');


for (let i = 0; i < 5; i++) {
   numeroInformado = Number(prompt.question('Informe 5 numeros: '));

   if (numeroInformado > maiorNumero) {
      maiorNumero = numeroInformado;

   }

}
console.log('o maior numero eh: ', maiorNumero);
/*
EXERCÍCIO 2:
percorrer string com for
lenght: tamanho


indície [i] percorre sendo menor ou igual que lenght(tamanho da String);

lembrar que a primeira posição é zero, e a segunda é um! always!
por isso a inicialização em 0, e finalização "menor que", incrementando a cada rodada do for
*/
console.log('**********muito importante!**********');
const atencao = 'Arrays';
for (let i = 0; i < atencao.length; i++) {


   console.log(atencao[i]);

}
let vamos = 0;
vamos = String(prompt.question('Vamos continuar?'));


const meusNumerosFavoritos = [18, 28, 42];
const pessoa = ['Lívia', 24, true];
console.log('meus numeros favoritos:', meusNumerosFavoritos);
console.log('pessoa:', pessoa);
let tudoCerto = 0;
tudoCerto = String(prompt.question('vamos continuar?'));

console.log('**********<3 lembrete importante: posições 0 e 1 do array! <3**********');
console.log('posicao 0 do Array: ', pessoa[0]);
console.log('posicao 1 do Array: ', pessoa[1]);

let referenciasFinais = 0;
referenciasFinais = String(prompt.question('Deseja prosseguir?'));


console.log('**********alterando o tipo de valor da variavel:**********');
pessoa[2] = false;
console.log(pessoa);

console.log('**********tamanho do array:**********');
console.log(pessoa.length);
console.log(meusNumerosFavoritos.length);

console.log('********** <3 fatiamento de arrays: <3 **********');
const fatiamentoDeArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(fatiamentoDeArrays);
console.log(fatiamentoDeArrays.slice(0, 4));
console.log(fatiamentoDeArrays.slice(2));

console.log('********** push: adicionando elementos no FINAL do array**********');
fatiamentoDeArrays.push(1000);
console.log(fatiamentoDeArrays);

console.log('********** unshift: adicionando elementos no INICIO do array**********');
fatiamentoDeArrays.unshift(1111111);
console.log(fatiamentoDeArrays);

console.log('**********Busca no Array!**********');


let verificacao = Number(prompt.question('Vamos encontrar! Busque um numero: '));

if (fatiamentoDeArrays.includes(verificacao)) {
   console.log('Que legal! existe', verificacao, 'no Array!');
   console.log('seu indice é:', fatiamentoDeArrays.indexOf(verificacao));
} else {
   console.log('Que pena!', verificacao, 'não está presente no Array!');
}

console.log('**********Percorrendo valores no Array com for **********');
const arr = [18,42,22]; 
for (i=0; i < arr.length; i++) {
   console.log('Meus numeros favoritos!!! indice: ' , i ,'elemento: ' , arr[i]);

}

console.log('********** FOR IN E FOR OF: boas práticas ihuuul! **********');
/*for of: elemento do array */
for(const element of arr) {
   console.log(element);

}
/*for in: indice do array */
for(const element in arr) {
   console.log(element);
}