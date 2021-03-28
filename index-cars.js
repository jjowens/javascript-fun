const vehicleMod = require('./models/vehicle');
const writerLib = require("./lib/writer");
const writer = writerLib.writer();

var carLot = [];
carLot.push(new vehicleMod.vehicle("Ford", "Fiesta", 200));
carLot.push(new vehicleMod.vehicle("Ford", "Focus", 400));
carLot.push(new vehicleMod.vehicle("Ford", "Estate", 600));

var carLotObj = {};
carLotObj.carlot = carLot;

let vehicleStr = JSON.stringify(carLotObj, null, 2);

writer.writeToFile("./output/car.json", vehicleStr);