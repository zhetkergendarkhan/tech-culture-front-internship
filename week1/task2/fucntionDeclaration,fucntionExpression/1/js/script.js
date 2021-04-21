/*
Cледующая функция возвращает true, если параметр age больше 18.
В ином случае она запрашивает подтверждение через confirm и возвращает его результат:
*/


function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
}


function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Родители разрешили?');
}


// Функции будут работать одинаково
