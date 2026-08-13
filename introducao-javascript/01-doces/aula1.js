//Primeira aula de java script//
/*Vamos aprender a criar as variaveis e conhecer os tipos*/

const nomeDoce = "Beijinho";
const preco = 7.6;
const disponivel = true;

console.log(nomeDoce,preco,disponivel );
document.getElementById("resultado").textContent= `${nomeDoce} custa R$ ${preco.toFixed(2)}-disponível: ${disponivel}`;
