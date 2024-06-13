const array = [4, 'hello', 3, true, 'Uki', 5];
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i] * array[i];
        }
    }
    return sum;
}

const result = sum(array);
console.log(result);