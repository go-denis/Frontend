const Roomba = {
    model: "Roomba 1",
    power: 200,

    //Делаем ссылку на прототип от родителя
    __proto__: RobotVacuumCleaner, // Самая важная часть
}

//Также можно устонвить прототип этим методом (Не поддерживется старыми браузерами)
Object.setPrototypeOf(Roomba, RobotVacuumCleaner);
Object.getPrototypeOf(Roomba, RobotVacuumCleaner);

Roomba.prototype = RobotVacuumCleaner;

Roomba.startCleaning();
