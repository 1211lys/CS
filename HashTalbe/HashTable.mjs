import { DoublyLinkedList } from "../queue/doublyLinkedList.mjs";

class HashData {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
  constructor() {
    //반복문으로 0부터 9까지 돌아가며 각 배열의 원소를 연결리스트로 초기화해준다.
    this.arr = [];
    for (let i = 0; i < 10; i++) {
      this.arr[i] = new DoublyLinkedList();
    }
  }

  hashFunction(number) {
    return number % 10;
  }

  set(key, value) {
    //배열의 인덱스에 해시함수의 결과값으로 접근하고
    //첫번째 원소에 해시데이터를 생성해서 삽입
    this.arr[this.hashFunction(key)].insertAt(
      0,
      new HashData(0, new HashData(key, value))
    );
  }

  get(key) {
    //해시 함수로 배열의 인덱스를 찾고
    //해당 인덱스의 노드를 헤드로 가르킨다.
    let currentNode = this.arr[this.hashFunction(key)].head;
    //리스트가 비어있지 않은 경우
    //리스트를 차례대로 순회하면서 해당 데이터의 key가 get() 함수의 인자로 받은 key와
    //같은지 비교하고 같으면 리턴
    while (currentNode != null) {
      if (currentNode.data.key == key) {
        return currentNode.data.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  remove(key) {
    let list = this.arr[this.hashFunction(key)];
    let currentNode = list.head;
    let deletedIndex = 0;
    while (currentNode != null) {
      if (currentNode.data.key == key) {
        return list.deleteAt(deletedIndex);
      }
      currentNode = currentNode.next;
      deletedIndex++;
    }
    return null;
  }
}
