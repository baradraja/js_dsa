const arr = [1, 2, 1, 3, 4, 4, 3, 5];


const removeUsingSet = (arr) => [...new Set(arr)];

const removeUsingFilterAndIndexOf = arr => 
arr.filter((item, index) => arr.indexOf(item) === index)

const removeUsingForEachAndInclude = (arr) => {
    let uniques = [];
    arr.forEach(element => {
        if (!uniques.includes(element)) {
            uniques.push(element);
        }
    });
    return uniques;
}
const removeUsingReduceAndInclude = (arr) => {
    return arr.reduce((acc, current) => 
    acc.includes(current) ? acc : [...acc, current], [])
}


//const duplicateElements = removeUsingSet(arr);
//const duplicateElements = removeUsingFilterAndIndexOf(arr);
//const duplicateElements = removeUsingForEachAndInclude(arr);
//const duplicateElements = removeUsingReduceAndInclude(arr);

console.log(duplicateElements);