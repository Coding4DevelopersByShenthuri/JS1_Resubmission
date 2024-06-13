const words = ["hello", "world", "javascript"];
function concatenateStrings(array) {
    let result = '';
    for (let i = 0; i < array.length; i++) {
        if (i > 0) {
            result += ' ';
        }
        result += array[i];
    }
    return result;
}

const concatenatedString = concatenateStrings(words);
console.log(concatenatedString);