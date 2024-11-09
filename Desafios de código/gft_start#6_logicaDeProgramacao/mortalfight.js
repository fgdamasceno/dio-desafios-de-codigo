/*

- Programa que simula no console os jogos de video game
no estilo Mortal Kombat e Street Fighter
- Desenvolvido como um desafio de código para o bootcamp da DIO.me
GTF Start #6 - Lógica de Programação

Desenvolvedor: Fernando G. Damasceno
Github: https://github.com/fgdamasceno

Obs.:
1. os nomes dos lutadores e todas suas caracteristicas foram criadas
através de um prompt passado ao chatGPT.com;
2. o programa foi testado no VS Code com Node.js na versão 20.13.1;
3. para testes em outras plataformas, verifique a possibilidade de 
substituir 'entrada' por 'prompt';

*/

const entrada = require("prompt-sync")({ sigint: true });

// GUERREIROS
const fighters = [
  {
    firstName: "Axl",
    alias: "Punho de Titânio",
    age: 35,
    type: "Guerreiro",
    weapons: ["Martelo Esmagador", "Soco de Ferro", "Escudo de Titânio"],
    weaponScores: [81, 68, 93],
    defenseNames: ["Escudo de Energia", "Reflexo de Ferro", "Capa Protetora"],
    defenseScores: [72, 90, 64],
  },
  {
    firstName: "Drake",
    alias: "Espírito da Tempestade",
    age: 28,
    type: "Xamã",
    weapons: ["Relâmpago Invocado", "Ventos Cortantes", "Lança Tempestuosa"],
    weaponScores: [92, 75, 83],
    defenseNames: ["Escudo de Vento", "Aura Espiritual", "Barreira de Água"],
    defenseScores: [70, 82, 88],
  },
  {
    firstName: "Ivy",
    alias: "Espinho Venenoso",
    age: 29,
    type: "Assassina",
    weapons: ["Adaga Envenenada", "Flecha Paralisante", "Fio de Seda Mortal"],
    weaponScores: [89, 76, 85],
    defenseNames: [
      "Escudo de Sombras",
      "Camuflagem Venenosa",
      "Dança das Lâminas",
    ],
    defenseScores: [92, 74, 80],
  },
  {
    firstName: "Jarek",
    alias: "Espada do Caos",
    age: 40,
    type: "Bárbaro",
    weapons: ["Machado de Guerra", "Espada do Caos", "Escudo de Pedra"],
    weaponScores: [94, 88, 77],
    defenseNames: ["Defesa Imparável", "Escudo de Rocha", "Proteção Selvagem"],
    defenseScores: [80, 91, 65],
  },
  {
    firstName: "Kaelan",
    alias: "Sombra Rápida",
    age: 22,
    type: "Ninja",
    weapons: ["Shuriken Mortal", "Katana das Sombras", "Fumaça Cegante"],
    weaponScores: [78, 90, 84],
    defenseNames: ["Passos Silenciosos", "Escudo de Fumaça", "Esquiva Rápida"],
    defenseScores: [80, 93, 72],
  },
  {
    firstName: "Kaiya",
    alias: "Tempestade Silenciosa",
    age: 27,
    type: "Assassina",
    weapons: ["Adaga de Silêncio", "Sopro de Veneno", "Pó de Invisibilidade"],
    weaponScores: [74, 88, 79],
    defenseNames: [
      "Escudo de Vento",
      "Esquiva Sombria",
      "Manto de Invisibilidade",
    ],
    defenseScores: [80, 90, 89],
  },
  {
    firstName: "Kira",
    alias: "Chama Eterna",
    age: 25,
    type: "Maga",
    weapons: ["Bola de Fogo", "Chamas Dançantes", "Parede de Fogo"],
    weaponScores: [82, 67, 79],
    defenseNames: ["Escudo Flamejante", "Cinto de Proteção", "Escudo de Magia"],
    defenseScores: [91, 75, 81],
  },
  {
    firstName: "Lian",
    alias: "Coração de Gelo",
    age: 30,
    type: "Maga",
    weapons: ["Lança de Gelo", "Névoa Congelante", "Geada Mortal"],
    weaponScores: [83, 91, 79],
    defenseNames: ["Escudo de Gelo", "Barreira Congelante", "Capa de Gelo"],
    defenseScores: [77, 85, 92],
  },
  {
    firstName: "Luna",
    alias: "Serpente Sutil",
    age: 26,
    type: "Assassina",
    weapons: ["Veneno Letal", "Chakram Envenenado", "Facas de Arremesso"],
    weaponScores: [80, 72, 85],
    defenseNames: ["Escudo de Veneno", "Defesa Agilidade", "Cloak of Shadows"],
    defenseScores: [85, 77, 89],
  },
  {
    firstName: "Mira",
    alias: "Encantadora da Lua",
    age: 33,
    type: "Feiticeira",
    weapons: ["Luz da Lua", "Encantamento Paralizante", "Névoa Ilusória"],
    weaponScores: [91, 74, 68],
    defenseNames: ["Escudo Lunar", "Névoa Ilusória", "Barreira Mágica"],
    defenseScores: [80, 68, 92],
  },
  {
    firstName: "Nero",
    alias: "Fúria do Trovão",
    age: 34,
    type: "Guerreiro",
    weapons: ["Raio Devastador", "Martelo do Trovão", "Campo Elétrico"],
    weaponScores: [79, 91, 77],
    defenseNames: ["Escudo Elétrico", "Defesa Trovão", "Escudo de Fogo"],
    defenseScores: [84, 90, 88],
  },
  {
    firstName: "Rael",
    alias: "Lobo de Prata",
    age: 32,
    type: "Caçador",
    weapons: ["Arco de Prata", "Adaga de Presas", "Lâmina Oculta"],
    weaponScores: [91, 83, 76],
    defenseNames: ["Armadura de Lã", "Escudo Prateado", "Reflexo Selvagem"],
    defenseScores: [72, 80, 79],
  },
  {
    firstName: "Ragnar",
    alias: "Punho de Fogo",
    age: 31,
    type: "Guerreiro",
    weapons: ["Soco Flamejante", "Martelo Vulcânico", "Escudo Ígneo"],
    weaponScores: [79, 81, 87],
    defenseNames: ["Escudo Flamejante", "Barreira de Lava", "Defesa Magma"],
    defenseScores: [86, 80, 74],
  },
  {
    firstName: "Rin",
    alias: "Tempestade de Aço",
    age: 28,
    type: "Guerreira",
    weapons: ["Lâminas Gêmeas", "Espada Afiada", "Escudo de Aço"],
    weaponScores: [79, 89, 88],
    defenseNames: ["Escudo de Aço", "Dança Defensiva", "Defesa Imparável"],
    defenseScores: [91, 78, 86],
  },
  {
    firstName: "Sable",
    alias: "Feiticeira Sombria",
    age: 36,
    type: "Maga Negra",
    weapons: ["Rajada de Sombras", "Nevoeiro Mortal", "Corrente das Trevas"],
    weaponScores: [85, 79, 72],
    defenseNames: [
      "Escudo das Sombras",
      "Dança das Sombras",
      "Barreira de Escuridão",
    ],
    defenseScores: [81, 86, 79],
  },
  {
    firstName: "Selena",
    alias: "Rainha das Sombras",
    age: 29,
    type: "Assassina",
    weapons: ["Kunai Sombria", "Névoa Enganadora", "Veneno Paralisante"],
    weaponScores: [82, 75, 90],
    defenseNames: ["Escudo Sombrio", "Esquiva das Sombras", "Defesa Mortal"],
    defenseScores: [85, 77, 79],
  },
];

const names = fighters.map(({ firstName }) => firstName);
const alias = fighters.map(({ alias }) => alias);

// MENSAGEM INICIO PROGRAMA
console.log();
console.log("=".repeat(15) + " BEM VINDO AO COMBATE MORTAL " + "=".repeat(16));
console.log();

// IMPRIME NA TELA O NOME DOS LUTADORES DE FORMA ORGANIZADA
console.log("ESCOLHA DOIS LUTADORES PARA QUE TRAVEM UMA BATALHA MORTAL:");
for (let i = 0; i < names.length; i++) {
  if (i < 9) {
    process.stdout.write("0" + (i + 1) + ". " + names[i].padEnd(17));
  } else {
    process.stdout.write(i + 1 + ". " + names[i].padEnd(17));
  }

  if ((i + 1) % 3 === 0) {
    console.log();
  }
}

// ESCOLHA DO PRIMEIRO LUTADOR
console.log("\n");
let firstChoice = entrada("ESCOLHA O 1º LUTADOR: ");
let firstFighter = names[firstChoice - 1];
let firstFighterAlias = alias[firstChoice - 1];
console.log(
  "1º Lutador selecionado: " + firstFighter + " '" + firstFighterAlias + "'\n"
);

// ESCOLHA DO SEGUNDO LUTADOR
let secondChoice = entrada("ESCOLHA O 2º LUTADOR: ");
let secondFighter = names[secondChoice - 1];
let secondFighterAlias = alias[secondChoice - 1];
while (secondChoice === firstChoice) {
  console.log(
    ">>> LUTADOR " +
      secondFighter +
      " JÁ FOI SELELIONADO.\n    TENTE OUTRA OPÇÃO: "
  );
  secondChoice = entrada("ESCOLHA O 2º LUTADOR: ");
  secondFighter = names[secondChoice - 1];
}
console.log(
  "2º Lutador selecionado: " + secondFighter + " '" + secondFighterAlias + "'\n"
);

// FUNÇÃO QUE SIMULA TEXTO SENDO DIGITADO - PRECISA SER DEVIDAMENTE IMPLEMENTADO
// function simulateTyping(message, interval) {
//   let index = 0;
//   const typingInterval = setInterval(() => {
//     process.stdout.write(message[index]);
//     index++;
//     if (index === message.length) {
//       clearInterval(typingInterval);
//     }
//   }, interval);
// }

// simulateTyping(
//   `Muito Bem!\nOs Lutadores '${firstFighter}' e '${secondFighter}' foram selecionados(as)!\nEles(as) travarão entre si um Combate Mortal!\nÉ hora de selecionar a quantidade de Rounds para o combate.\n`,
//   25
// );

console.log(
  `Muito Bem!\nOs Lutadores '${firstFighter}' e '${secondFighter}' foram selecionados(as)!\nEles(as) travarão entre si um Combate Mortal!\nÉ hora de selecionar a quantidade de Rounds para o combate.\n`
);

// ESCOLHA DA QUANTIDADE DE ROUNDS
let rounds = null;
// setTimeout(() => {}, 6500);
console.log("\nESCOLHA A QUANTIDADE DE ROUNDS QUE A LUTA TERÁ:");
const roundsArr = [3, 5, 10, 15, 20, 50, 100, 150, 200, 300];
for (let i = 0; i < roundsArr.length; i++) {
  if (i < 9) {
    process.stdout.write(
      "0" + (i + 1) + ". " + roundsArr[i].toString().padEnd(17)
    );
  } else {
    process.stdout.write(i + 1 + ". " + roundsArr[i].toString().padEnd(17));
  }

  if ((i + 1) % 3 === 0) {
    console.log();
  }
}
rounds = entrada("\nROUNDS: ");

// INICIO DA LUTA
// setTimeout(() => {}, 10000); // IMPLEMENTAR
console.log();
console.log("=".repeat(60));
console.log(
  firstFighter.toUpperCase().padEnd(60 - secondFighter.length) +
    secondFighter.toUpperCase()
);
console.log("=".repeat(27) + " FIGHT " + "=".repeat(26));

// LUTAS, ROUNDS VENCIDOS, PONTUAÇÃO TOTAL, RESULTADO FINAL (VENDEDOR, PERDEDOR, EMPATE)
const actions = ["attack", "defend", "run"];
const firstFighterScoresArr = [];
let firstFighterActionPoints = 0;
// const firstFighterWepons = [...fighters[firstChoice - 1].weapons];
const firstFighterWeaponScores = [...fighters[firstChoice - 1].weaponScores];
// const firstFighterDefenses = [...fighters[firstChoice - 1].defenseNames];
const firstFighterDefenseScores = [...fighters[firstChoice - 1].defenseScores];
let firstFighterTotalPoints = 0; // IMPLEMENTAR

const secondFighterScoresArr = [];
let secondFighterActionPoints = 0;
// const secondFighterWepons = [...fighters[secondChoice - 1].weapons];
const secondFighterWeaponScores = [...fighters[secondChoice - 1].weaponScores];
// const secondFighterDefenses = [...fighters[secondChoice - 1].defenseNames];
const secondFighterDefenseScores = [
  ...fighters[secondChoice - 1].defenseScores,
];
let secondFighterTotalPoints = 0; // IMPLEMENTAR

// ESCOLHE ALEATORIAMENTE QUAL FOI A AÇÃO DOS LUTADORES
let firstFighterAction = [];
for (let i = 0; i < roundsArr[rounds - 1]; i++) {
  let r = Math.floor(Math.random() * 3);
  firstFighterAction.push(actions[r]);
  if (r === 0) {
    let r1 = Math.floor(Math.random() * 3);
    firstFighterScoresArr.push(firstFighterWeaponScores[r1]);
  } else if (r === 1) {
    let r1 = Math.floor(Math.random() * 3);
    firstFighterScoresArr.push(firstFighterDefenseScores[r1]);
  } else if (r === 2) {
    firstFighterScoresArr.push(0);
  }
}

let secondFighterAction = [];
for (let i = 0; i < roundsArr[rounds - 1]; i++) {
  let r = Math.floor(Math.random() * 3);
  secondFighterAction.push(actions[r]);
  if (r === 0) {
    let r1 = Math.floor(Math.random() * 3);
    secondFighterScoresArr.push(secondFighterWeaponScores[r1]);
  } else if (r === 1) {
    let r1 = Math.floor(Math.random() * 3);
    secondFighterScoresArr.push(secondFighterDefenseScores[1]);
  } else if (r === 2) {
    secondFighterScoresArr.push(0);
  }
}

// ADICIONA PONTUAÇÃO COM BASE NA AÇÃO DOS LUTADORES
let firstFighterAttack = 0;
let firstFighterDefend = 0;
let firstFighterRun = 0;
for (let i = 0; i < roundsArr[rounds - 1]; i++) {
  if (firstFighterAction[i] === "attack") {
    firstFighterAttack += 1;
    firstFighterActionPoints += 10;
  } else if (firstFighterAction[i] === "defend") {
    firstFighterActionPoints += 5;
    firstFighterDefend += 1;
  } else if (firstFighterAction[i] === "run") {
    firstFighterActionPoints -= 10;
    firstFighterRun += 1;
  }
}

let secondFighterAttack = 0;
let secondFighterDefend = 0;
let secondFighterRun = 0;
for (let i = 0; i < roundsArr[rounds - 1]; i++) {
  if (secondFighterAction[i] === "attack") {
    secondFighterActionPoints += 10;
    secondFighterAttack += 1;
  } else if (secondFighterAction[i] === "defend") {
    secondFighterActionPoints += 5;
    secondFighterDefend += 1;
  } else if (secondFighterAction[i] === "run") {
    secondFighterActionPoints -= 10;
    secondFighterRun += 1;
  }
}

// REALIZA A SOMA PARA A PONTUAÇÃO FINAL
let firstFighterScoreArrSum = 0;
for (let v of firstFighterScoresArr) {
  firstFighterScoreArrSum += v;
}

let secondFighterScoreArrSum = 0;
for (let v of firstFighterScoresArr) {
  secondFighterScoreArrSum += v;
}
firstFighterTotalPoints = firstFighterScoreArrSum + firstFighterActionPoints;
secondFighterTotalPoints = secondFighterScoreArrSum + secondFighterActionPoints;

// IMPRIME OS RESULTADOS NA TELA
const strings = [
  `Em ${roundsArr[rounds - 1]} Rounds`,
  "Ataques",
  "Defesas",
  "Fugas",
  "Pontuação Final",
  "VENCEDOR",
  "DERROTADO",
  "Nível Alcançado",
];
const results = [
  firstFighterAttack,
  firstFighterDefend,
  firstFighterRun,
  firstFighterTotalPoints,
  secondFighterAttack,
  secondFighterDefend,
  secondFighterRun,
  secondFighterTotalPoints,
];

const fightersNivel = [];
const totalPoints = [firstFighterTotalPoints, secondFighterTotalPoints];
for (let i = 0; i < 2; i++) {
  if (totalPoints[i] <= 100) {
    fightersNivel.push("Ferro");
  } else if (totalPoints[i] <= 200) {
    fightersNivel.push("Bronze");
  } else if (totalPoints[i] <= 500) {
    fightersNivel.push("Prata");
  } else if (totalPoints[i] <= 800) {
    fightersNivel.push("Ouro");
  } else if (totalPoints[i] <= 900) {
    fightersNivel.push("Diamante");
  } else if (totalPoints[i] <= 1000) {
    fightersNivel.push("Lendário");
  } else {
    fightersNivel.push("Imortal");
  }
}
let nivelFirstFighter = fightersNivel[0];
let nivelSecondFighter = fightersNivel[1];

console.log();
console.log(
  `${strings[0]}`.padEnd(60 - strings[0].length, " . ") + `${strings[0]}`
); // Em x rounds
console.log(`${strings[1]}`.padEnd(60 - strings[1].length) + `${strings[1]}`); // Ataques
console.log(
  `${results[0]}`.padEnd(60 - results[4].toString().length) + `${results[4]}`
);

console.log(`${strings[2]}`.padEnd(60 - strings[2].length) + `${strings[2]}`); // Defesas
console.log(
  `${results[1]}`.padEnd(60 - results[5].toString().length) + `${results[5]}`
);

console.log(`${strings[3]}`.padEnd(60 - strings[3].length) + `${strings[3]}`); // Fugas
console.log(
  `${results[2]}`.padEnd(60 - results[6].toString().length) + `${results[6]}`
);

console.log(`${strings[4]}`.padEnd(60 - strings[4].length) + `${strings[4]}`); // Pontuação Final
console.log(
  `${results[3]}`.padEnd(60 - results[7].toString().length) + `${results[7]}`
);

console.log(`${strings[7]}`.padEnd(60 - strings[7].length) + `${strings[7]}`);
console.log(
  `${nivelFirstFighter}`.padEnd(60 - nivelSecondFighter.length) +
    `${nivelSecondFighter}`
);

if (firstFighterTotalPoints > secondFighterTotalPoints) {
  console.log();
  console.log(`${strings[5]}`.padEnd(60 - strings[6].length) + `${strings[6]}`);
  console.log("=".repeat(60));
} else if (firstFighterTotalPoints < secondFighterTotalPoints) {
  console.log();
  console.log(`${strings[6]}`.padEnd(60 - strings[5].length) + `${strings[5]}`);
  console.log("=".repeat(60));
} else {
  console.log();
  console.log(" ".repeat(31) + " EMPATE " + " ".repeat(31));
  console.log("=".repeat(60));
}

console.log();

/*

OBS.:
  - A VITÓRIA OU DERROTA É DADA A PARTIR DA PONTUAÇÃO FINAL DE CADA LUTADOR;
  - ATAQUES GANHAM PONTOS CHEIOS, DEFESAS METADE DOS PONTOS E FUGAS PERDE-SE PONTOS CHEIOS
  - TAMBÉM SOMAM-SE À PONTUAÇÃO FINAL OS VALORES RELATIVOS AOS INTRUMENTOS DE ATAQUE E DEFESA 

Considerando os valores contidos em 'fighters', exitem algumas possibilidades de implementação:
Ex.: imprimir cada round com seus resultados, armas e defesas utilizadas e suas pontuações especificas,
pontos ganhos e perdidos, etc
*/
