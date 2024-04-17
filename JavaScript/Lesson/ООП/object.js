const Roomba = {
    model: "Roomba 1",
    power: 200,

    startCleaning: function () {
        console.log("I ma cleaning... my model is " + this.model + " and my power is " + this.power);
    }
}

Roomba.startCleaning();