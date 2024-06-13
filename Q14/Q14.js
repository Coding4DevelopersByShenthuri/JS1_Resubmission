function findCommonElements(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const commonElements = [];

    for (const element of set1) {
        if (set2.has(element)) {
            commonElements.push(element);
        }
    }

    return commonElements;
}

console.log(findCommonElements([1, 2, 3], [3, 4, 5]));