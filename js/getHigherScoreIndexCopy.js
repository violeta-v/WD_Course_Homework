let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];


// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// ---> YOUR CODE HERE <---

function getHighestScoreIndex(arr){
    let maxScore = arr[0];
    let maxIndex;
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        if (number>=maxScore){
            maxScore = number;
            maxIndex = i
        } 
    }
    return maxIndex;
}

let max = getHighestScoreIndex(scores);

console.log(`${students[max]} has the higest score: ${scores[max]}`);


// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// ---> YOUR CODE HERE <---



// expected output
// Maria has the highest score: 6
