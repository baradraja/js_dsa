

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readline() {
    return inputString[currentLine++];
}
// Make a Snippet for the code above this and then write your logic in main();


function main() {
    const x = readline();
    var line2 = readline(); 
    
    foo(x);
    foo(line2);
}
function foo(x) {
    process.stdout.write("hello: ");   // without auto '\n' (newline)
    console.log(x);  // with auto '\n' (newline)
}