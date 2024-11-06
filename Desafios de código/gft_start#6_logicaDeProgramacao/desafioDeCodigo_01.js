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

// com NODE.js, substitua 'prompt' por 'entrada'
const escolhaA = entrada("\nDIGITE O NÚMERO DO PRIMEIRO LUTADOR: ");
const lutadorA = combatentes[escolhaA - 1];
console.log("Combatente 1: " + lutadorA);

let escolhaB = entrada("DIGITE O NÚMERO DO SEGUNDO LUTADOR: ");
let lutadorB = combatentes[escolhaB - 1];
while (escolhaB === escolhaA) {
  console.log("   Lutador já foi selecionado. Selecione outro!");
  escolhaB = entrada("DIGITE O NÚMERO DO SEGUNDO LUTADOR: ");
  lutadorB = combatentes[escolhaB - 1];
}
console.log("Combatente 2: " + lutadorB);

console.log();
console.log("=".repeat(60));
console.log(" " + lutadorA + lutadorB.padStart(58 - lutadorA.length) + " ");
console.log("=".repeat(27) + " FIGHT " + "=".repeat(26));
console.log();
console.log();

const ResultadoRoundsLutadorA = [];
for (let i = 1; i <= 3; i++) {
  let result = Math.floor(Math.random() * 10000);
  ResultadoRoundsLutadorA.push(result);
}

const ResultadoRoundsLutadorB = [];
for (let i = 1; i <= 3; i++) {
  let result = Math.floor(Math.random() * 10000);
  ResultadoRoundsLutadorB.push(result);
}

for (let i = 0; i < 3; i++) {
  console.log(" ".repeat(26) + " Round " + (i + 1) + " " + " ".repeat(25));
  console.log(
    " " +
      ResultadoRoundsLutadorA[i].toString() +
      ResultadoRoundsLutadorB[i]
        .toString()
        .padStart(58 - ResultadoRoundsLutadorA[i].toString().length, ".") +
      " "
  );
}

let resultadoLutadorA = 0;
let resultadoLutadorB = 0;

for (let i = 0; i < 3; i++) {
  resultadoLutadorA += ResultadoRoundsLutadorA[i];
  resultadoLutadorB += ResultadoRoundsLutadorB[i];
}

console.log();
console.log();
if (resultadoLutadorA > resultadoLutadorB) {
  console.log(" " + lutadorA + " wins!");
} else if (resultadoLutadorA < resultadoLutadorB) {
  console.log(" " + lutadorB + " wins!");
} else {
  console.log(" Draw!");
}
