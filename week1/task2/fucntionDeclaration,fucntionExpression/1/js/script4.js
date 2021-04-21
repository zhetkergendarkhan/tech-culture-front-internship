/*
Напишите функцию pow(x,n), которая возвращает x в степени n.
 Иначе говоря, умножает x на себя n раз и возвращает результат.
*/

function pow(x, n) {
    let result = x

    for (let i = 1; i < n; i++) {
        result *= x
    }

    return result
}

let x = prompt("x?", '')
let n = prompt("n?", '')

if (n < 1) {
    alert("Ошибка")
} else {
    alert(pow(x, n))
}
