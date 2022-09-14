import { doublyLinkedList } from "./doublyLinkedList.mjs";

class queue {
  constructor() {
    this.list = doublyLinkedList;
  }

  enqueue(data) {
    this.list.insertAt(0, data);
  }

  dequeue() {
    try {
      return this.list.deleteLast();
    } catch (e) {
      return null;
    }
  }

  front() {
    return this.list.tail;
  }

  isEmpty() {
    return this.count.list == 0;
  }
}

export { queue };
