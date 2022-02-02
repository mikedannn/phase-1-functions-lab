function distanceFromHqInBlocks(street){
    return Math.abs(street - 42); 
}

function distanceFromHqInFeet(street){
    return (distanceFromHqInBlocks(street) * 264);
}

function distanceTravelledInFeet(street1, street2){
    return Math.abs(street1 - street2) * 264;
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far';
    }
    if (distanceTravelledInFeet(start, destination) > 2000) {
        return 25;
    }
    if (distanceTravelledInFeet(start, destination) < 401) {
        return 0;
    }
    if (distanceTravelledInFeet(start, destination) < 2001) {
        return ((distanceTravelledInFeet(start, destination) - 400) * 0.02);
    }
}