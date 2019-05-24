'use strict';

// Complete this algo
// const binarySearch = (array, target) => {
//   if (array.length < 1 || (array.length === 1 && target !== array[0])) {
//     return false;
//   }
//   let middleInd = Math.floor(array.length / 2);

//   if (array[middleInd] === target) {
//     return true;
//   } else if (target < array[middleInd]) {
//     return binarySearch(array.slice(0, middleInd), target);
//   } else {
//     return binarySearch(array.slice(middleInd), target);
//   }
// };

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

const binarySearch = (array, target, left = 0, right = array.length - 1) => {
  let arrLength = right - left + 1;

  console.log('array: ', array.slice(left, right + 1));

  if (arrLength < 1 || (arrLength === 1 && target !== array[0])) {
    return false;
  }
  let middleInd = left + Math.floor(arrLength / 2);

  if (array[middleInd] === target) {
    return true;
  } else if (target < array[middleInd]) {
    return binarySearch(array, target, left, middleInd - 1);
  } else {
    return binarySearch(array, target, middleInd, right);
  }
};

module.exports = binarySearch;
