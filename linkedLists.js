class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export default class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.headNode === null) {
      this.headNode = newNode;
    } else {
      let current = this.headNode;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
    this.tailNode = newNode;
  }
  prepend(value) {
    const newNode = new Node(value);
    if (this.headNode) {
      newNode.nextNode = this.headNode;
    }
    this.headNode = newNode;
  }
  size() {
    if (!this.headNode) {
      return;
    }
    let current = this.headNode;
    let count = 1;
    while (current.nextNode !== null) {
      count += 1;
      current = current.nextNode;
    }
    return count;
  }
  head() {
    if (!this.headNode) {
      return;
    }
    return this.headNode.value;
  }
  tail() {
    if (!this.tailNode) {
      return;
    }
    return this.tailNode.value;
  }
  at(index) {
    if (!this.headNode) {
      return;
    }
    let targetNode = this.headNode;
    for (let i = 0; i < index; i++) {
      targetNode = targetNode.nextNode;
      if (targetNode === null) {
        return;
      }
    }
    return targetNode.value;
  }
  pop() {
    if (!this.headNode) {
      return;
    }
    const target = this.headNode;
    delete this.headNode;
    this.headNode = target.nextNode;
    return target.value;
  }
  contains(value) {
    let targetNode = this.headNode;
    while (targetNode !== null) {
      if (targetNode.value === value) {
        return true;
      } else {
        targetNode = targetNode.nextNode;
      }
    }
    return false;
  }
  findIndex(value) {
    let targetNode = this.headNode;
    let index = 0;
    while (targetNode !== null) {
      if (targetNode.value === value) {
        return index;
      } else {
        targetNode = targetNode.nextNode;
        index++;
      }
    }
    return -1;
  }
  toString() {
    let string = "";
    let targetNode = this.headNode;
    while (targetNode !== null) {
      if (targetNode.nextNode === null) {
        string = string + ` ( ${targetNode.value} ) -> null`;
      } else {
        string = string + ` ( ${targetNode.value} ) ->`;
      }
      targetNode = targetNode.nextNode;
    }
    return string;
  }
}
