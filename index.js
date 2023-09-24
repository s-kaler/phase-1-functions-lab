// Code your solution in this file!
function distanceFromHqInBlocks(streetNum){
    return Math.abs(streetNum - 42);
}

const blockDistance = 264;

function distanceFromHqInFeet(streetNum){
    return distanceFromHqInBlocks(streetNum) * blockDistance;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * blockDistance;
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if(distance <= 400){
        return 0;
    }
    else if ((distance > 400) && (distance <= 2000)){
        return (distance - 400) * 0.02;
    }
    else if ((distance > 2000) && (distance <=2500)){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
}