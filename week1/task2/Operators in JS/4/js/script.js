/*
1)Что выведет код ниже?
*/

alert(null || 2 || undefined);


//Ответ: 2

//-------------------


/*
2)Что выведет код ниже?
*/

alert(alert(1) || 2 || alert(3));


//Ответ: 1 затем 2


//-------------------


/*
3)Что выведет код ниже?
*/

alert(1 && null && 2);


//Ответ: null

//-------------------


/*
3)Что выведет код ниже?
*/

alert(1 && null && 2);


//Ответ: null


//-------------------


/*
4)Что выведет код ниже?
*/

alert(alert(1) && alert(2));


//Ответ: 1 потом undefined


//-------------------


/*
5)Что выведет код ниже?
*/

alert(null || 2 && 3 || 4);


//Ответ: 3


//-------------------


/*
6)Напишите условие if для проверки, что переменная age находится в диапазоне между
 14 и 90 включительно.«Включительно» означает, что значение переменной age может быть
  равно 14 или 90.
*/

let age = prompt("Введите свой возраст")
if (age >= 14 && age <= 90) {
    console.log("testing")
} else {
    console.log("testing2")
}


// 7)Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне
// 14 и 90 включительно.Напишите два варианта: первый с использованием оператора НЕ !, второй
// – без этого оператора.


let age2 = prompt("Введите свой возраст")
if (age2 < 14 || age2 > 90) {
    console.log("testing")
} else {
    console.log("testing2")
}


// 8)Какие из перечисленных ниже alert выполнятся? Какие конкретно значения
// будут результатами выражений в условиях if(...)?

if (-1 || 0) alert('first'); //ДА
if (-1 && 0) alert('second'); //НЕТ
if (null || -1 && 1) alert('third'); //ДА


/*
9)Напишите код, который будет спрашивать логин с помощью prompt.Если посетитель вводит
«Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc –
показать «Отменено», в противном случае отобразить «Я вас не знаю».Пароль проверять так:
Если введён пароль «Я главный», то выводить «Здравствуйте!»,Иначе – «Неверный пароль»,
При отмене – «Отменено».
*/

let user = prompt("Кто там?", '');
if (user == 'Админ') {
    let password = prompt('Пароль?', '');
    if (password == 'Я главный') {
        alert('Здравствуйте!');
    } else if (password == '' || password == null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (user == '' || user == null) {
    alert('Отменено');
} else {
    alert("Я вас не знаю");
}








