
// Q1..
function sumArray(arr) {
    let sum = 0;
    
    for (const number of arr) {
        sum = sum + number;
    }
    
    return sum;
}
const numbers = [5, 10, 15, 20];
const totalSum = sumArray(numbers);
console.log("--- SumArray Function Execution ---");
console.log("Input Array:", numbers);
console.log("Calculated Sum (sumArray(numbers)):", totalSum);
console.log("-----------------------------------");
// Q2..
function longNames(names) {
    return names.filter(name => {
    return name.length > 4;
  });
}
const names = ["Ali", "Sara", "Omar", "Lina", "Mohamed"];
const result = longNames(names);
console.log("Original Names:", names);
console.log("Long Names (longer than 4 characters):", result);
// Q3..
function countWords(str) {
    const cleanedStr = str
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .trim()
        .replace(/\s+/g, ' ');

    if (!cleanedStr) {
        return {};
    }

    return cleanedStr.split(' ').reduce((counts, word) => {
        if (word) {
            counts[word] = (counts[word] || 0) + 1;
        }
        return counts;
    }, {});
}
const exampleInput = "hello world hello";
const exampleOutput = countWords(exampleInput);
console.log(`Example Input: "${exampleInput}"`);
console.log(`Expected Output: { hello: 2, world: 1 }`);
console.log(`Actual Output: ${JSON.stringify(exampleOutput)}`);

