const dan = prompt ('Koji je danas dan?');

switch (dan) { //switch se sve manje koristi, ali zna biti zgodan, jer je pregledniji od if else situacije
    case 'ponedjeljak': // dan === ponedjeljak
        console.log('danas je dan');
        console.log('marš na sastanak');
        break; // ako se makne break kod će ispisati i idući dan jer nema breaka
    case 'utorak':
        console.log('danas nije taj dan');
        break;
    case 'srijeda':
    case 'cetvrtak':
        console.log('ni danas nije taj dan');
        break;
    case 'petak':
        console.log('petak je');
        break;
    case 'subota':
    case 'nedjelja':
        console.log('vikend bejbe');
        break;
        default:
            console.log('nije unijet dan iz tjedna');
}