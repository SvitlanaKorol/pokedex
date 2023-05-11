export const getDataDescription = (name, item) => {
  return [
    { column1: name.cardTypes, column2: item.types[0].type.name },
    { column1: name.cardAttack, column2: item.stats[1].base_stat },
    { column1: name.cardDefense, column2: item.stats[2].base_stat },
    { column1: name.cardHP, column2: item.stats[0].base_stat },
    { column1: name.cardSpDefense, column2: item.stats[4].base_stat },
    { column1: name.cardSpeed, column2: item.stats[5].base_stat },
    { column1: name.cardWeight, column2: item.weight },
    { column1: name.cardTotalMoves, column2: item.moves.length },
  ];
};
