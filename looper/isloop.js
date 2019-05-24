'use strict';

//Complete this algo
const isLoop = linkedlist => {
  let currentNode = linkedlist.head;
  let values = {};
  while (currentNode !== null) {
    if (currentNode.value in values) {
      return true;
    } else {
      values[currentNode.value] = true;
    }
    currentNode = currentNode.next;
  }
  return false;
};

const findLoop = linkedlist => {
  let currentNode = linkedlist.head;
  let values = {};
  while (currentNode !== null) {
    if (currentNode.value in values) {
      return currentNode.value;
    } else {
      values[currentNode.value] = true;
    }
    currentNode = currentNode.next;
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = {
  isLoop,
  findLoop,
};
