#!/usr/bin/env node

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array: string[] = [];
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function isPalindrome(str: string): boolean {
    for(let idx = 0; idx <= str.length / 2; idx++) {
        if(str[idx] != str[str.length - idx - 1]) return false;
    }
    return true;
}
function main() {
    let line = "";
    while((line = readLine()) != null) {
        console.log(line, isPalindrome(line));
    }
}
