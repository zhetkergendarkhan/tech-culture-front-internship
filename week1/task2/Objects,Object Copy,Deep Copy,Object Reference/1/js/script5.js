// Создайте функцию multiplyNumeric(obj), которая
// умножает все числовые свойства объекта obj на 2.


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

function multipleBy2(menu){
    for (let key in menu){
        if(typeof menu[key]==='number'){
            menu[key] =menu[key]*2
            console.log(menu[key])
        }
    }
}


multipleBy2(menu)
