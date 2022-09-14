class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.preve = prev;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
      if (this.head != null) {
        this.head.prev = newNode;
      }
      this.head = newNode;
      //새로생성한 노드의 넥스트를 헤드로 배치하고
      //새로생성한 노드를 헤드로 변경
    } else if (index == this.count) {
      newNode.next = null;
      newNode.prev = this.tail;
      this.tail.next = newNode;
    } else {
      let currentNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
        //목표인덱스의 전 노드까지 커런트 노드를 접근시킨다.
      }
      newNode.next = currentNode.next;
      newNode.prev = currentNode;
      currentNode.next = newNode;
      newNode.next.prev = newNode;
      // 새로운 노드가 커런트노드의 넥스트노드를 가르키고
      // 커런트 노드가 새로운 노드를 가르킨다.
    }

    if (newNode.next == null) {
      this.tail = newNode;
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
      if (this.head.next == null) {
        this.head = null;
        this.tail = null;
        //데이터가 하나일때 모두 비워준다.
      } else if (index == this.count - 1) {
        let deletedNode = this.tail;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
        this.count--;
        return deletedNode;
        //처음과 끝이 아닌 노드를 삭제했을때
      } else {
        this.head = this.head.next;
        this.head.prev = null;
        //헤드가 삭제되면 다음 노드를 헤드로 만들고 이전 노드를 비워준다.
      }
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
      currentNode.next.prev = currentNode;
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

export { Node, doublyLinkedList };
