const rotateArr = (arr, count, clockwise) => {
    //initial checks
    if (count==0) return null;
    if (arr == null || arr.length == 0) return null;
    if(count > arr.length) count = count%arr.length;


    //This first approach = linear time (O(n)) and constant space (O(1)).
    // for (let i=0; i < count; i++) {
    //     if(clockwise == true){
    //         let temp = arr.pop();
    //         arr.unshift(temp);
    //     } else if(clockwise == false) {
    //         let temp = arr.shift();
    //         arr.push(temp);
    //     }
    // }
    // return arr;


    //This second approach = linear time (O(n)) and constant space (O(n)).
    // let newArr = [];
    // for (let i=0; i < arr.length; i++) {
    //     if(clockwise == true){
    //         newArr[(i+count)% arr.length] = arr[i];
    //     } else if(clockwise == false) {
    //         newArr[i] = arr[(i+count)% arr.length];
    //     }
    // }
    // return newArr;

 //This third approach = linear time (O(n)) and constant space (O(1)).
    if(clockwise == true){
        reverseArr(arr, 0, arr.length-1);
        reverseArr(arr, 0, count-1);
        reverseArr(arr, count, arr.length-1);
        
    } else if(clockwise == false) {
        reverseArr(arr, 0, arr.length-1);
        reverseArr(arr, 0, arr.length - count -1);
        reverseArr(arr, arr.length - count, arr.length-1);
    }
    return arr;
    function reverseArr(arr, start, end) {
        while (start < end) {
          let temp = arr[start];
          arr[start] = arr[end];
          arr[end] = temp;
          start++;
          end--;
        }
        return arr;
    }
    
}

let arr = [1,2,3,4,5];
console.log(rotateArr(arr, 7, false));