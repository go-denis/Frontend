document.addEventListener("DOMContentLoaded", () => {
    const schedule = [
        {
            "id": 1,
            "name": "Йога",
            "time": "10:00 - 11:00",
            "maxParticipants": 15,
            "currentParticipants": 8
        },
        {
            "id": 2,
            "name": "Пилатес",
            "time": "11:30 - 12:30",
            "maxParticipants": 10,
            "currentParticipants": 5
        },
        {
            "id": 3,
            "name": "Кроссфит",
            "time": "13:00 - 14:00",
            "maxParticipants": 20,
            "currentParticipants": 15
        },
        {
            "id": 4,
            "name": "Танцы",
            "time": "14:30 - 15:30",
            "maxParticipants": 12,
            "currentParticipants": 10
        },
        {
            "id": 5,
            "name": "Бокс",
            "time": "16:00 - 17:00",
            "maxParticipants": 8,
            "currentParticipants": 6
        }
    ];

    const storedData = JSON.parse(localStorage.getItem('schedule')) || schedule;
    const userRegistrations = JSON.parse(localStorage.getItem('registrations')) || {};

    const saveData = () => {
        localStorage.setItem('schedule', JSON.stringify(storedData));
        localStorage.setItem('registrations', JSON.stringify(userRegistrations));
    };

    const updateTable = () => {
        const tbody = document.querySelector("#schedule-table tbody");
        tbody.innerHTML = "";
        storedData.forEach(session => {})
        storedData.forEach(session => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${session.name}</td>
                <td>${session.time}</td>
                <td>${session.maxParticipants}</td>
                <td>${session.currentParticipants}</td>
                <td><button class="register-btn" data-id="${session.id}">Записаться</button></td>
                <td><button class="unregister-btn" data-id="${session.id}">Отменить запись</button></td>
            `;

            const registerBtn = tr.querySelector(".register-btn");
            const unregisterBtn = tr.querySelector(".unregister-btn");

            if (session.currentParticipants >= session.maxParticipants || userRegistrations[session.id]) {
                registerBtn.classList.add("disabled");
            }

            if (!userRegistrations[session.id]) {
                unregisterBtn.classList.add("disabled");
            }

            registerBtn.addEventListener("click", () => {
                if (session.currentParticipants < session.maxParticipants) {
                    session.currentParticipants++;
                    userRegistrations[session.id] = true;
                    saveData();
                    updateTable();
                }
            });

            unregisterBtn.addEventListener("click", () => {
                if (userRegistrations[session.id]) {
                    session.currentParticipants--;
                    delete userRegistrations[session.id];
                    saveData();
                    updateTable();
                }
            });

            tbody.appendChild(tr);
        });
    };

    updateTable();
});
