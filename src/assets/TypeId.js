export function getTypeName(typeId) {
    switch (typeId) {
      case 1:
        return 'AutoFragment'; //'Fragment plastique'; //'Sheet / tarp / plastic bag / fragment';
      case 2:
        return 'AutoInsulating'; //'Matériau isolant'; //'Insulating material';
      case 3:
        return 'AutoBottleShaped'; //'Bouteille'; //'Bottle-shaped';
      case 4:
        return 'AutoCanShaped'; //'Canette'; //'Can-shaped';
      case 5:
        return 'AutoDrum'; //'Rouleau'; //'Drum';
      case 6:
        return 'AutoOtherPackaging'; //'Autre emballage'; //'Other packaging';
      case 7:
        return 'AutoTire'; //'Pneu'; //'Tire';
      case 8:
        return 'AutoFishingNet'; //'Filet'; //'Fishing net / cord';
      case 9:
        return 'AutoEasilyNamable'; //'Facilement nommable'; //'Easily namable';
      case 10:
        return 'AutoUnclear'; //'Indéterminé'; //'Unclear';
      case 11:
        return 'Fragment'; //'Fragment plastique'; //'Sheet / tarp / plastic bag / fragment';
      case 12:
        return 'AgriculturalFoodWaste'; 
      case 13:
        return 'Bottles'; //'Bouteille';
      case 14:
        return 'Industrials'; 
      case 15:
        return 'FishHunting'; 
      case 16:
        return 'FoodPackage'; 
      case 17:
        return 'HouseholdItems'; 
      case 18:
        return 'Fragment10'; 
      case 19:
        return 'Trash'; 
      case 20:
        return 'BulkyTrash';  
      case 21:
        return 'AccumulationZone'; 
      default:
        return 'Unknown'; //'Indéterminé';
    }
  }
