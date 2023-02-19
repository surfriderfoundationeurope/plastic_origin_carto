export function getTypeName(typeId) {
    switch (typeId) {
      case 1:
        return 'Fragment plastique'; //'Sheet / tarp / plastic bag / fragment';
      case 2:
        return 'Matériau isolant'; //'Insulating material';
      case 3:
        return 'Bouteille'; //'Bottle-shaped';
      case 4:
        return 'Canette'; //'Can-shaped';
      case 5:
        return 'Rouleau'; //'Drum';
      case 6:
        return 'Autre emballage'; //'Other packaging';
      case 7:
        return 'Pneu'; //'Tire';
      case 8:
        return 'Filet'; //'Fishing net / cord';
      case 9:
        return 'Facilement nommable'; //'Easily namable';
      case 10:
        return 'Indéterminé'; //'Unclear';
      default:
        return 'Indéterminé';
    }
  }