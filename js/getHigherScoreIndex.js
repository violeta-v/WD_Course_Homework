let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];


// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// ---> YOUR CODE HERE <---
function getHighestScoreIndex(arr){
    let max = i;
    let maxIndex;

    for(let i=0; i<arr.length; i++){
        const number = arr[i];
        if(number>max){
            max = number;
            maxIndex = i;
        }
     }
}
console.log (students [maxIndex]);


// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// ---> YOUR CODE HERE <---



// expected output
// Maria has the higest score: 6
