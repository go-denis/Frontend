// Класс сотрудника
class Employee {
    constructor(name) {
        this.name = name;
    }

    // Метод для вывода информации о сотруднике
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}

// Класс менеджера, наследуется от класса Employee
class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }

    // Переопределение метода displayInfo для вывода информации о менеджере
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Department: ${this.department}`);
    }
}

// Пример использования классов для управления персоналом компании
const employee = new Employee("John Smith");
employee.displayInfo();
// Вывод:
// Name: John Smith

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales

// Класс продукта
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// Класс заказа
class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }

    // Метод для добавления продукта в заказ
    addProduct(product) {
        this.products.push(product);
    }

    // Метод для вычисления общей стоимости заказа
    getTotalPrice() {
        let totalPrice = 0;
        for (let product of this.products) {
            totalPrice += product.price;
        }
        return totalPrice;
    }
}

// Пример использования классов для управления списком заказов
const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600
