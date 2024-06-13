const numbers = [1, 2, 3, 4, 5, 6];
function even(array) {
    const evnum = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evnum.push(array[i]);
        }
    }
    return evnum;
}
const evennumbers = even(numbers);
console.log(evennumbers);