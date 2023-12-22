// Задание 2
let x = 5;

if (typeof x === 'number') {
    console.log("x - число");
} else if (typeof x === 'string') {
    console.log("x - строка");
} else if (typeof x === 'boolean') {
    console.log("x - логический тип");
} else {
    console.log("Тип x не определен");
}

// С помощью оператора switch
switch (typeof x) {
    case 'number':
        console.log('x - число');
        break;

    case 'string':
        console.log ('x - строка');
        break;

    case 'boolean':
        console.log ('x - логический тип');
        break;

    default:
        console.log('Тип x не определён');
}