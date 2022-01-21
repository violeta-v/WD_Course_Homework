// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---

function findMaxEven(arr) {
    let maxnum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] % 2 == 0) && (arr[i] >= maxnum)); {
            maxnum = arr[i];   
        }
      }return maxnum;
    }
    

// TEST
let numbers = [2, -4, 5, 3, 9, 0, 1];
let max = findMaxEven(numbers);
console.log(`The max of ${numbers} is ${max}`);

/*function findMaxEven(arr) {
    let max = arr[0];
    //try 1
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];
        if ((number % 2 === 0) && (number > max)) {
            max = number;
            return max;
        }
      }
    }

// TEST
let numbers = [2, -4, 5, 3, 9, 0, 1];
let max = findMaxEven(numbers);
console.log(`The max of ${numbers} is ${max}`);*/