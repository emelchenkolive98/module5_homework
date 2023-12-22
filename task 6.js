// Задание 6
let arr = [1, 1, 1, 1, 1];
let result = true;

for (i = 1; i < arr.length; i++) {

    if (arr[i]  !== arr[i - 1]) {
        result = false;
        break;
    }
}

console.log (result);
