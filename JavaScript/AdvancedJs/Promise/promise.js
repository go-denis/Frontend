setTimeout(() => {
    if (condition) {

    } else {

    }
}, 100);

let generateRandomNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           const randomNumber = Math.floor(Math.random() * 10) + 1;
           if (randomNumber) {
               resolve(randomNumber);
           } else {
               reject('Ошибка генерации случайного числа');
           }
        },1000);
    });
};

generateRandomNumber()
    .then((number) => {
        console.log('Сгенерировано случайное число: ', number);
    })
    .catch((error) => {
        console.log('Ошибка', error);
    });