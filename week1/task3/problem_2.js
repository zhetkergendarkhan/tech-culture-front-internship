// Задание №2
// Вам дана целочисленная матрица счетов m x n, где accounts[i][j] — это сумма денег i-го
// клиента в j-м банке. Верните богатство, которое есть у самого богатого клиента.
//     Богатство клиента — это сумма денег на всех его банковских счетах.
//     Самый богатый клиент — это тот, кто обладает максимальным богатством.


let accounts = [[2,8,7], [7,1,3], [1,9,5]]

function getMaxWealth(accounts) {
    let max = 0
    let sum = 0

    for (let i = 0; i < accounts.length; i++) {
        for (let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j]

        }
        if (sum >= max) {
            max = sum
            sum=0
        }
    }

    return max
}

let result = getMaxWealth(accounts)
console.log(result)
