"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

// Посетитель ресторана.
class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

// Вам необходимо реализовать класс, который управляет заказами и поварами.
class Manager {
  constructor() {
    // Карта поваров и их специализаций
    this.chefs = new Map([
      ['Пицца', 'Олег'],
      ['Суши', 'Андрей'],
      ['Десерт', 'Анна']
    ]);

    // Множество доступных блюд
    this.availableDishes = new Set([
      { name: 'Маргарита', type: 'Пицца' },
      { name: 'Пепперони', type: 'Пицца' },
      { name: 'Три сыра', type: 'Пицца' },
      { name: 'Филадельфия', type: 'Суши' },
      { name: 'Калифорния', type: 'Суши' },
      { name: 'Чизмаки', type: 'Суши' },
      { name: 'Сеякемаки', type: 'Суши' },
      { name: 'Тирамису', type: 'Десерт' },
      { name: 'Чизкейк', type: 'Десерт' }
    ]);

    // Карта для хранения заказов клиентов
    this.orders = new Map();
  }

  newOrder(client, ...dishes) {
    // Создаем или обновляем заказы клиента
    if (!this.orders.has(client)) {
      this.orders.set(client, []);
    }
    const clientOrders = this.orders.get(client);

    for (const dish of dishes) {
      // Проверяем, существует ли блюдо
      if (!this.isDishAvailable(dish.name, dish.type)) {
        throw new Error(`Десерт "${dish.name}" - такого блюда не существует.`);
      }

      // Добавляем или обновляем количество заказа
      const existingOrder = clientOrders.find(o => o.name === dish.name && o.type === dish.type);
      if (existingOrder) {
        existingOrder.quantity += dish.quantity;
      } else {
        clientOrders.push(dish);
      }
    }

    this.displayOrder(client, clientOrders);
  }

  isDishAvailable(name, type) {
    return Array.from(this.availableDishes).some(dish => dish.name === name && dish.type === type);
  }

  displayOrder(client, orders) {
    console.log(`Клиент ${client.firstname} заказал:`);
    for (const order of orders) {
      const chef = this.chefs.get(order.type);
      console.log(`${order.type} "${order.name}" - ${order.quantity}; готовит повар ${chef}`);
    }
  }
}

// Можно передать внутрь конструктора что-либо, если необходимо.
const manager = new Manager();

// Вызовы ниже должны работать верно, менять их нельзя, удалять тоже.
manager.newOrder(
  new Client("Иван", "Иванов"), 
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" },
);
// Вывод:
// Клиент Иван заказал: 
// Пицца "Маргарита" - 1; готовит повар Олег
// Пицца "Пепперони" - 2; готовит повар Олег
// Десерт "Чизкейк" - 1; готовит повар Анна

// ---

const clientPavel = new Client("Павел", "Павлов");
manager.newOrder(
  clientPavel, 
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" },
);
// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 3; готовит повар Андрей

manager.newOrder(
  clientPavel, 
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" },
);
// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 4; готовит повар Андрей
// Десерт "Тирамису" - 2; готовит повар Анна

manager.newOrder(
  clientPavel, 
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" },
);
// Ничего не должно быть добавлено, должна быть выброшена ошибка:
// Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.