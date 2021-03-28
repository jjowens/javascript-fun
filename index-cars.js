const vehicleMod = require('./models/vehicle');
const writerLib = require("./lib/writer");

let writer = writerLib.writer();

var carLot = [];
carLot.push(new vehicleMod.vehicle("Ford", "Fiesta", 200));
carLot.push(new vehicleMod.vehicle("Ford", "Focus", 400));
carLot.push(new vehicleMod.vehicle("Ford", "Estate", 600));

let vehicleStr = JSON.stringify(carLot, null, 2);

writer.writeToFile("./output/car.json", vehicleStr);