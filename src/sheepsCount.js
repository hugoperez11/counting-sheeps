export function countSheeps(list) {
    let sheepCount = 0;
    
    // Recorrer la lista y contar las ovejas (valores true)
    for (let i = 0; i < list.length; i++) {
      if (list[i] === true) {
        sheepCount++;
      }
    }
    
    // Retornar el resultado según el conteo de ovejas
    if (sheepCount > 0) {
      return `There are ${sheepCount} sheep in total`;
    } else {
      return "UPS!!! Wolfs eaten Sheeps";
    }
  }
  