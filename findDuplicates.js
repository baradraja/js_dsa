const arr = [1, 2, 1, 3, 4, 4, 3, 5];
const findUsingForLoopClassic = (arr) => {
    let new_arr = [...arr]
    let duplicates = [];
    for (let i = 0; i < new_arr.length; i++) {
        for (let j = 0; j < new_arr.length; j++) {
           if(i!=j){
            if(new_arr[j] === new_arr[i]){
                duplicates.push(new_arr[j]);
                new_arr.splice(i, 1);
            }
           }
        }
    }
    
    return duplicates;
}

const findUsingSet = (arr) => {
    let set = new Set(arr);
    const duplicates = arr.filter(item => {
        if (set.has(item)) {
            set.delete(item);
        } else {
            return item;
        }
    });
    return duplicates;
}
const findUsingFilterAndIndexOf = arr => 
arr.filter((item, index) => arr.indexOf(item) !== index)

const findUsingForLoop = (arr) => {
    let new_arr = [...arr];
    let duplicates = [];
    let length = new_arr.length;
    for (let i = 0; i < length; i++) {
        new_arr[new_arr[i] % length]
            = new_arr[new_arr[i] % length] + length;
    }
    for (let i = 0; i < length; i++) {
        if (new_arr[i] >= length * 2) {
            duplicates.push(i);
        }
    }
    return duplicates;
}

//const duplicateElements = findUsingFilterAndIndexOf(arr);
//const duplicateElements = findUsingSet(arr);
//const duplicateElements = findUsingForLoop(arr);
const duplicateElements = findUsingForLoopClassic(arr);
console.log(duplicateElements);