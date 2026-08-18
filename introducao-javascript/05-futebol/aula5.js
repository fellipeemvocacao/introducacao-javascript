//Operadores Lógicos//

const pontos = 40;
const saldoGols = 5;
const venceuUltimoJogo = true;
const classificado = pontos >= 35 && (saldoDeGols > 0 || venceuUltimoJogo);

console.log(classificado);
document.getElementById("resultado").textContent = `Time classificado para a próxima fase? ${classificado}`;