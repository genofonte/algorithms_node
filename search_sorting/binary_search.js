/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-console */
const search = (arr, s) => {
  const arraylenght = arr.length;
  if (arraylenght >= 1) {
    const halfArrayIndex = Math.ceil(arraylenght / 2) - 1;
    if (arr[halfArrayIndex] === s) {
      return s;
    } if (arr[halfArrayIndex > s]) {
      return search(arr.slice(0, halfArrayIndex + 1), s);
    }
    return search(arr.slice(halfArrayIndex + 1), s);
  }
  return -1;
};

const inputArray = [1, 2, 3, 4, 5, 10, 40, 90, 500, 1500, 7000];
const searchItem = 900000;
const ressult = search(inputArray, searchItem);
console.log(`The resoult is: ${ressult}`);
