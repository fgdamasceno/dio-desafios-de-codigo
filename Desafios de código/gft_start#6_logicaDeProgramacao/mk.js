const entrada = require("prompt-sync")({ sigint: true });
// para que prompt possa ser executado.
// todos os prompts foram substituidos por 'entrada'

console.log("======================= MORTAL KOMBAT ======================\n");

console.log(
  "ESCOLHA DOIS LUTADORES PARA O COMBATE MORTAL:\n  (1) - Striker       (2) - Kano           (3) - Sonya Blade\n  (4) - Jax Briggs    (5) - Johnny Cage    (6) - Scorpion\n  (7) - Sub-Zero      (8) - Kitana         (9) - Liu Kang\n (10) - Raiden       (11) - Shao Khan     (12) - Shinnok\n (13) - Quan Chi     (14) - Onaga         (15) - Blaze\n (16) - Kronika"
);

const combatentes = [
  "Striker",
  "Kano",
  "Sonya Blade",
  "Jax Briggs",
  "Johnny Cage",
  "Scorpion",
  "Sub-zero",
  "Kitana",
  "Liu Kang",
  "Raiden",
  "Shao Khan",
  "Shinnok",
  "Quai Chi",
  "Onaga",
  "Blaze",
  "Kronika",
];

// Para rodar com NODE.js, substitua 'prompt' por 'entrada'
const escolhaA = entrada("\nDIGITE O NÚMERO DO PRIMEIRO LUTADOR: ");
const lutadorA = combatentes[escolhaA - 1];
console.log(">>> Lutador 1: " + lutadorA + "\n");

let escolhaB = entrada("DIGITE O NÚMERO DO SEGUNDO LUTADOR: ");
let lutadorB = combatentes[escolhaB - 1];

// nao permite que o usuario escolha o mesmo lutador
while (escolhaB === escolhaA) {
  console.log("   Lutador já foi selecionado. Selecione outro!");
  escolhaB = entrada("DIGITE O NÚMERO DO SEGUNDO LUTADOR: ");
  lutadorB = combatentes[escolhaB - 1];
}
console.log(">>> Lutador 2: " + lutadorB + "\n");

let rounds = entrada("QUANTOS ROUNDS TERÁ A LUTA (1 a 300)? ");
// nao permite que o usuario digite uma quantidade inválida
while (rounds > 300 || rounds < 1) {
  rounds = entrada("DIGITE UMA QUANTIDADE VÁLIDA (1 a 300): ");
}
console.log(">>> Total de Rounds: " + rounds);

console.log("\n");
console.log("=".repeat(60));
console.log(" " + lutadorA + lutadorB.padStart(58 - lutadorA.length) + " ");
console.log("=".repeat(27) + " FIGHT " + "=".repeat(26));

// ARMAZENA AS PONTUAÇÕES POR ROUNDS DO LUTADOR A
const resultadoRoundsLutadorA = [];
for (let i = 1; i <= rounds; i++) {
  let result = Math.floor(Math.random() * 100);
  resultadoRoundsLutadorA.push(result);
}

// ARMAZENA AS PONTUAÇÕES POR ROUNDS DO LUTADOR B
const resultadoRoundsLutadorB = [];
for (let i = 1; i <= rounds; i++) {
  let result = Math.floor(Math.random() * 100);
  resultadoRoundsLutadorB.push(result);
}

// SOMA AS VITORIAS DE CADA LUTADOR
let countA = 0;
let countB = 0;
for (let i = 0; i < rounds; i++) {
  if (resultadoRoundsLutadorA[i] > resultadoRoundsLutadorB[i]) {
    countA++;
  } else {
    countB++;
  }
}

// SOMA O VALOR TOTAL DE PONTUAÇÃO DE CADA LUTADOR
let resultadoLutadorA = 0;
let resultadoLutadorB = 0;
for (let i = 0; i < rounds; i++) {
  resultadoLutadorA += resultadoRoundsLutadorA[i];
  resultadoLutadorB += resultadoRoundsLutadorB[i];
}

// ADICIONA 100 PONTOS À CADA VITORIA
resultadoLutadorA += countA * 100;
resultadoLutadorB += countB * 100;

// DEFINIÇÃO DE NIVEIS
let niveis = [];
const counts = [countA, countB];
for (let i = 0; i < 2; i++) {
  if (counts[i] <= 10) {
    niveis.push("Ferro");
  } else if (counts[i] <= 20) {
    niveis.push("Bronze");
  } else if (counts[i] <= 50) {
    niveis.push("Prata");
  } else if (counts[i] <= 80) {
    niveis.push("Ouro");
  } else if (counts[i] <= 90) {
    niveis.push("Diamante");
  } else if (counts[i] <= 100) {
    niveis.push("Lendário");
  } else {
    niveis.push("Imortal");
  }
}
let nivelA = niveis[0];
let nivelB = niveis[1];

function printFinalStats() {
  console.log();
  console.log("Rounds Vencidos" + "Rounds Vencidos".padStart(60 - 15));
  console.log(
    countA.toString().padEnd(60 - countB.toString().length) + countB.toString()
  );
  console.log("Pontuação Total" + "Pontuação Total".padStart(60 - 15));
  console.log(
    resultadoLutadorA
      .toString()
      .padEnd(60 - resultadoLutadorB.toString().length) +
      resultadoLutadorB.toString()
  );
  console.log("Nível Alcançado".padEnd(60 - 15) + "Nível Alcançado");
  console.log(nivelA.padEnd(60 - nivelB.length) + nivelB);
  console.log();
  // TODO: exibir resultado corretamente
  if (countA > countB) {
    console.log("VENCEDOR".padEnd(60 - "DERROTADO".length) + "DERROTADO");
  } else if (countA < countB) {
    console.log("DERROTADO".padEnd(60 - "VENCEDOR".length) + "VENCEDOR");
  } else {
    console.log("".repeat(26) + " EMPATE ");
  }
}

printFinalStats();

console.log("=".repeat(28) + " END " + "=".repeat(27));
console.log();
