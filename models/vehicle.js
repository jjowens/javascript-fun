class vehicle {
    make = "";
    model = "";
    wheels = 4;
    enginesize = 100;

    constructor(make, model, enginesize) {
        this.make = make;
        this.model = model;
        this.enginesize = enginesize;
    }
    
}

module.exports.vehicle = vehicle;