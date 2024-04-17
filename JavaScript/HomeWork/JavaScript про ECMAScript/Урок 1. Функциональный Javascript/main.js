document.addEventListener("DOMContentLoaded", function() {
    /**
     * Задание 1
     */
    const arr = [1,5,7,9];
    min = Math.min(...arr);

    console.log(min);

    /**
     * Задание 2
     */
    function createCounter() {
        let count = 0;

        return {
            increment: function() {
                count++;
            },
            decrement: function() {
                count--;
            },
            getCount: function() {
                return count;
            }
        };
    }

// Создаем счетчик
    const counter = createCounter();

// Используем методы для увеличения и уменьшения счетчика
    counter.increment();
    console.log(counter.getCount()); // Вывод: 1

    counter.increment();
    console.log(counter.getCount()); // Вывод: 2

    counter.decrement();
    console.log(counter.getCount()); // Вывод: 1

    /**
     * Задание 3
     */
    function findElementByClass(rootElement, className) {
        // Проверяем, если текущий элемент имеет класс, который мы ищем
        if (rootElement.classList.contains(className)) {
            return rootElement;
        }

        // Рекурсивно ищем в дочерних элементах
        for (let i = 0; i < rootElement.children.length; i++) {
            const childElement = rootElement.children[i];
            const foundElement = findElementByClass(childElement, className);
            if (foundElement) {
                return foundElement; // Если найден элемент с классом, возвращаем его
            }
        }

        // Если ничего не найдено, возвращаем null
        return null;
    }

// Пример использования:
    const rootElement = document.getElementById('root');
    const targetElement = findElementByClass(rootElement, 'my-class');
    console.log(targetElement);
});