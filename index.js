let iceCreamFlavor = prompt(`What froyo flavor(s) would you like to order?`);
const flavorList = iceCreamFlavor.split(',');

const flavorTypes = {}

for (i = 0; i < flavorList.length; i++) {
    if (!flavorList[i]){
        flavorTypes[flavorList[i]] = 1;
    } else {
        flavorTypes[flavorList[i]] += 1;
    }   
}
