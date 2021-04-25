// Задача №1
// Дан массив с числами nums.Мы определяем текущую сумму массива
// как runningSum[i] = sum(nums[0]…nums[i]).
// Вернуть сумму элементов массива nums.


 let nums =[1,2,3,4]
 let runningSums=[nums[0]]

for (let i=1;i<nums.length;i++){
    runningSums.push(runningSums[i-1]+nums[i])
}

console.log(runningSums)


