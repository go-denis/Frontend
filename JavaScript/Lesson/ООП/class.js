class RobotVacuumCleaner {
    model = "Roomba 2";
    power = 200;

    constructor(power = 200) {
        this.power = power;
    }

    startCleaning() {
        return "I ma cleaning... my model is " + this.model + " and my power is " + this.power;
    }
}

const Rooomba2 = new RobotVacuumCleaner(400);
console.log(Rooomba2.startCleaning());