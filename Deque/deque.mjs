import { DoublyLinkedList } from "../queue/doublyLinkedList.mjs";

class Deque {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  printAll() {
    this.list.printAll();
  }

  addFrist(data) {
    this.list.insertAt(0, data);
  }

  removeFirst() {
    return this.list.deleteAt(0);
  }

  addLast(data) {
    this.list.insertAt(this.list.count, data);
  }

  removeLast() {
    return this.list.deleteLast();
  }

  isEmpty() {
    return this.list.count == 0;
  }
}

export { Deque };
