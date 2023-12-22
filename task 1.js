// Задание 1
let result = +prompt('Введите значение:');

if (isNaN(result)){
    console.log('Упс, кажется, вы ошиблись')
} else if (result % 2 === 0) {
    console.log('Четное число')
} else {
    console.log('Нечетное число')
}
