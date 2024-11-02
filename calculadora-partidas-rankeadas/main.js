function calculateVictoriesBalance(victories, defeats) {
  return Math.abs(victories) - Math.abs(defeats);
}

const levels = [
  { name: "Ferro", maxVictories: 10 },
  { name: "Bronze", maxVictories: 20 },
  { name: "Prata", maxVictories: 50 },
  { name: "Ouro", maxVictories: 80 },
  { name: "Diamante", maxVictories: 90 },
  { name: "Lendário", maxVictories: 100 },
  { name: "Imortal", maxVictories: undefined },
]

const victoriesBalance = calculateVictoriesBalance(77, 2);

for (const level of levels) {
  const isLastLevel = level.maxVictories === undefined;
  if (!isLastLevel && victoriesBalance > level.maxVictories) continue;
  console.log(`O Herói tem de saldo de ${victoriesBalance} está no nível de ${level.name}`);
  break;
}