// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(x, y) {

  if(x>y) return x;
  else return y;

}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words){
  let max = 0,final = null;
  for(let i = 0; i<words.length; i++){
    if (words[i].length > max){
      max = words[i].length
      final = words[i];
    }
  }
  return final;
}
// console.log(findScaryWord(words));

// Progression #3: Net Price
const prices = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110];
function netPrice(prices) {
  let sum = 0;
  
  for(let i = 0; i<prices.length; i++) {
    sum+=prices[i];
  }
  return sum;
}

// Progression #3.1 (Bonus): A generic sum() function
function add(mixedArr) {

  let sum = 0;

  for(let i=0; i<mixedArr.length; i++) {
      if(typeof mixedArr[i] == 'number')
        sum += mixedArr[i];
      else if(typeof mixedArr[i] == 'string')
        sum += mixedArr[i].length;
      else if(typeof mixedArr[i] == 'boolean') {
        if(mixedArr[i] == true)
        sum++;
      }else {
        throw new Error("Unsupported data type sir or ma'am");
      }
  }
  return sum;
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Progression #4: Calculate the average
function midPointOfLevels(numbers) {
  if(numbers.length == 0) return null;
  let sum = 0;
  
  for(let i = 0; i<numbers.length; i++) {
    sum+=numbers[i];
  }

  let num = numbers.length;

  return sum/num;

}


// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  
  if(wordsArr.length == 0) return null;

  let sum = 0;

  for(let i=0; i<wordsArr.length; i++) {
    sum = sum + wordsArr[i].length;
  }

  return sum/wordsArr.length;
} 

// Progression #4.3 (Bonus): A generic avg() function

function avg(mixedArr) {

  if(mixedArr.length == 0) return null;

  let sum = 0;

  for(let i=0; i<mixedArr.length; i++) {
    if(typeof mixedArr[i] == 'number')
      sum += mixedArr[i];
    else if(typeof mixedArr[i] == 'string')
      sum += mixedArr[i].length;
    else if(typeof mixedArr[i] == 'boolean') {
      if(mixedArr[i] == true)
      sum++;
    }else {
      throw new Error("Unsupported data type sir or ma'am");
    }
  }
  sum = sum/mixedArr.length;
  return Math.round((sum + Number.EPSILON) * 100)/ 100; 

}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(wordsUnique) {
  if(wordsUnique.length == 0) return null;
  
  unique = [...new Set(wordsUnique)];

  return unique;

}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(wordsFind, word) {
  if(wordsFind.length == 0) return null
  let res = false;

  for(let i=0; i<wordsFind.length; i++) {
    if(wordsFind[i] == word) 
      res = true;
  }

  return res
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(wordsCount, word) {

  let count = 0

  for(let i=0; i<wordsCount.length; i++) {
    if(wordsCount[i] == word) 
      count++;
  }

  return count;
}

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix){
  let prod = 0, max = 0
  for(let i = 0; i < 7; i++){
    for(let y = 0; y < 7; y++){
      prod = matrix[i][y] * matrix[i][y + 1] * matrix[i][y + 2] * matrix[i][y + 3]
      if(prod > max)
        max = prod
    }
  }
  for(let y = 0; y < 7; y++){
    for(let i = 0; i < 7; i++){
      prod = matrix[i][y] * matrix[i + 1][y] * matrix[i+2][y] * matrix[i+3][y]
      if(prod > max)
        max = prod
    }
  }
  return max
}