/*Задание 1.
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 
степени + 3 ^ 3 степени */

function cube(number) {
    return number*number*number
}
console.log(cube(2) + cube(3));




/*Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы
 за вычетом налогов равен значение"*/

let number = prompt('Введи любое число');
if (isNaN(number)) {
    alert("Ввел не число")
}
function noNalog(salary) {
    return `Размер заработной платы за вычетом налогов равен ${salary*0.87}`
}
console.log(noNalog(number));





/*Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел*/

let userNumber1 = prompt("Введи первое число");
let userNumber2 = prompt("Введи второе число");
let userNumber3 = prompt("Введи третье число");

function maxNumber(number1, number2, number3) {
    return Math.max(number1, number2, number3)
}
alert("Максимальное значение равно " + maxNumber(userNumber1, userNumber2, userNumber3));





/*Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.*/

const userNumber1 = 10;
const userNumber2 = 10;

function sumNumber(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

function multiplicationNumber(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function divisionNumber(numberOne, numberTwo) {
    return numberOne / numberTwo;
}

function differenceNumber(numberOne, numberTwo) {
    function maxNumber(numberOne, numberTwo) {
        return Math.max(numberOne, numberTwo);
    }
    function minNumber(numberOne, numberTwo) {
        return Math.min(numberOne, numberTwo);
    }
    return maxNumber(numberOne, numberTwo) - minNumber(numberOne, numberTwo);
}

console.log(`${sumNumber(userNumber1, userNumber2)} 
             ${multiplicationNumber(userNumber1, userNumber2)}
             ${divisionNumber(userNumber1, userNumber2)}
             ${differenceNumber(userNumber1, userNumber2)}`);
