// Задание №3
// Дана строка s и целочисленный индекс массива одинаковой длины.
// Строки будут перетасованы таким образом, что символ в i-й позиции переместится в
// indices[i] в перетасованной строке.Верните перетасованную (перемешанную) строку.

let s='codeleet'
let indices = [4, 5, 6, 7, 0, 2, 1, 3]
let result =[]

for (let i=0;i<indices.length;i++){
    result[indices[i]]=s[i]
}

result=result.join('')
console.log(result)
