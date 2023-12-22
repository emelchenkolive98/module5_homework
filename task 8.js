// Задание 8
let map = new Map();

map.set("fun" , "one");
map.set(true, 10);
map.set(null, undefined)

for (let [key, value] of map) {
    console.log(`Ключ — ${key}, значение — ${value}`);
}