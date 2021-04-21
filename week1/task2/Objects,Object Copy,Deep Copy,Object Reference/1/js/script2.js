/*
Напишите функцию isEmpty(obj), которая возвращает true,
если у объекта нет свойств, иначе false.
*/

function isEmpty(obj) {
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false
        } else {
            return true
        }
    }
}


