const strings = ["hello", "", "world", "", "javascript"];
function deletespace(array) {
    return array.filter(string => string !== "");
}
const nonEmptyStrings = deletespace(strings);
console.log(nonEmptyStrings);