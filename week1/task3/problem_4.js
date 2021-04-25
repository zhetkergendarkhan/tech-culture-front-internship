// Задание №4
// Предложение — это список слов, разделенных одним пробелом без начальных и
// конечных пробелов. Каждое из слов состоит только из прописных и строчных английских
// букв (без знаков препинания).Например, &quot;Hello World&quot;, &quot;HELLO&quot; и
// &quot;hello world hello world&quot; — это все предложения.Вам дается предложение s и
// целое число k. Вы хотите усечь s так, чтобы он содержалтолько первые k слов. Предложение
// s возвращается после его усечения.


function truncateSentence (s,k){
    s=s.split(' ')
    result=s.slice(0,k).join(' ')
    console.log(result)

}


truncateSentence('What is the solution to this problem',4)
