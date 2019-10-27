// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,1);
};
 const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};
 const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
];
 function createFareMultiplier(multiplier) {
    return function fareMultiplier(fare) {
        return fare * multiplier;
    }
}
 function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
}
 function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
}
 function fetchSpecifiedDrivers(drivers, cb) {
    return cb(drivers);
<<<<<<< HEAD
}
=======
}
>>>>>>> 129148f78b8958887cbc4a8ab6e67dd3e4feba37
