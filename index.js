// Code your solution in this file!
function distanceFromHqInBlocks(dist){
    return Math.abs(dist-42);
}
function distanceFromHqInFeet(dist){
    return distanceFromHqInBlocks(dist)*264;
}
function distanceTravelledInFeet(start, destination){
    return Math.abs(start-destination)*264;
}
function calculatesFarePrice(start, destination){
    const dist = distanceTravelledInFeet(start, destination);
    if(dist<400) return 0;
    else if (dist<2000) return .02*(dist-400);
    else if (dist<2500) return 25;
    else return 'cannot travel that far';
}