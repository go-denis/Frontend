// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// console.log("Задание 1");

// for (let i = 0; i <= 10; i++) {
//     if (i === 0){
//         console.log(`${i} - это ноль`);
//     } else if (i % 2 === 0) {
//         console.log(`${i} - это четное число`);
//     } else {
//         console.log(`${i} - это нечетное число`); 
//     }
// }


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// console.log("Задание 2");
// console.log("Дан массив [1, 2, 3, 4, 5, 6, 7]");

// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3,2);
// console.log(arr);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// console.log("Задание 3");
// // задаем массив
// function randomArray(length) {
//     const arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.ceil(Math.random() * 9)) 
//     }
//     return arr
// }
// let length = 5;
// const newArr = randomArray(length)
// console.log(`Сгенерирован новый массив - [${newArr}]`);

// // 1. Рассчитать сумму элементов этого массива
// function sum (arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         count+=arr[i];
//     }
//     return count;
// }
// console.log(`Сумму элементов этого массива - ${sum(newArr)}`);

// // // 2. Найти минимальное число
// function min(arr) {
//     const min = Math.min(...arr);
//     return min;
// }
// console.log(`Минимальное число этого массива - ${min(newArr)}`);

// // 3. Найти есть ли в этом массиве число 3

// function presence(number) {
//     if (number > 0) {
//         return `В массиве присутствует цифра 3 в количистве - ${number} шт.`
//     } else {
//         return `В массиве нет цифр 3`
//     }
// }

// function checkNum(arr) {
//     count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 3) {
//             count++;
//         }
//     }
//     return presence(count);
// }
// console.log(checkNum(newArr));


// Задание 4. *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

console.log('Задание 4');
for (let i = 0; i <= 20; i++) {
    let count = ''
    for (let j = 0; j <= i; j++) {
        count +='x';    
    }
    console.log(count);
}