// Получение данных о пользователе
function getUserData(userID) {
    return fetch(`https://example.com/users/${userID}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        });
}

// Отправка данных на сервер
function saveUserData(userData) {
    return fetch('https://example.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to save user data');
            }
        });
}

// Изменение стиля элемента через заданное время
function changeStyleDelayed(elementID, delay) {
    setTimeout(() => {
        const element = document.getElementById(elementID);
        if (element) {
            element.style.color = 'red';
            // Здесь можно изменить любые другие стили элемента
        }
    }, delay);
}

// Пример использования функции getUserData
getUserData(123)
    .then(userData => console.log(userData))
    .catch(error => console.log(error.message));

// Пример использования функции saveUserData
const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

saveUserData(user)
    .then(() => {
        console.log('User data saved successfully');
    })
    .catch(error => {
        console.log(error.message);
    });

// Пример использования функции changeStyleDelayed
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'
