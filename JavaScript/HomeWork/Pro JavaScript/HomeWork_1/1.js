"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

// Создаем объект "Музыкальная коллекция"
const musicCollection = {
    albums: [
        { title: "Album 1", artist: "Artist 1", year: "2001" },
        { title: "Album 2", artist: "Artist 2", year: "2002" },
        { title: "Album 3", artist: "Artist 3", year: "2003" }
    ],
    [Symbol.iterator]() {
        let index = 0;
        let albums = this.albums;
        return {
            next() {
                if (index < albums.length) {
                    return { value: albums[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

// Используем цикл for...of для перебора альбомов
for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}

