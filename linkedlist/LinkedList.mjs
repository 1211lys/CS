class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  printAll() {
    let currentNode = this.head;
    let text = "[";

    while (currentNode != null) {
      text += currentNode.data;
      currentNode = currentNode.next;

      if (currentNode != null) {
        text += ", ";
      }
    }

    text += "]";
    console.log(text);
  }

  clear() {
    this.head = null;
    this.count = 0;
  }

  insertAt(index, data) {
    if (index > this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }

    let newNode = new Node(data);

    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
      //새로생성한 노드의 넥스트를 헤드로 배치하고
      //새로생성한 노드를 헤드로 변경
    } else {
      let currentNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
        //목표인덱스의 전 노드까지 커런트 노드를 접근시킨다.
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      // 새로운 노드가 커런트노드의 넥스트노드를 가르키고
      // 커런트 노드가 새로운 노드를 가르킨다.
    }
    this.count++;
  }

  insertLast(data) {
    this.insertAt(this.count, data);
    //insertAt()함수를 호출해서 인덱스에 리스트의 크기인 count를 넣어
    //가장 뒤에 데이터를 삽입한다.
  }

  deleteAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("제거할수 없음");
    }

    let currentNode = this.head;

    if (index == 0) {
      let deletedNode = this.head;
      this.head = this.head.next;
      this.count--;
      return deletedNode;
      //헤드 노드를 제거
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      let deletedNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      this.count--;
      return deletedNode;
      //헤드 노드를 제외한 나머지 노드 제거
    }
  }

  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  getNodeAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("범위를 넘어감");
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}

export { Node, LinkedList };
