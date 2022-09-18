import { HashTable } from "../HashTalbe/HashTable.mjs";

class HashSet {
  constructor() {
    this.hashTable = new HashTable();
  }

  add(data) {
    //해시테이블에 data에 해당하는 Key가 없다면 새로 삽입
    if (this.hashTable.get(data) == null) {
      //value는 쓰이지 않기 때문에 고정적으로 -1
      this.hashTable.set(data, -1);
    }
  }
  isContain(data) {
    //set에 해당 데이터가 있는지 확인하는 함수
    return this.hashTable.get(data) != null;
  }

  remove(data) {
    this.hashTable.remove(data);
  }

  clear() {
    for (let i = 0; i < this.hashTable.arr.length; i++) {
      this.hashTable.arr[i].clear();
    }
  }

  isEmpty() {
    let empty = true;
    for (let i = 0; i < this.hashTable.arr.length; i++) {
      if (this.hashTable.arr[i].count > 0) {
        //해당 배열의 리스트 카운트가 0보다 크면 비어있지 않다는 의미
        //break 로 for문을 빠져나간다.
        empty = false;
        break;
      }

      return empty;
    }
  }

  printAll() {
    for (let i = 0; i < this.hashTable.arr.length; i++) {
      let currentNode = this.hashTable.arr[i].head;
      while (currentNode != null) {
        console.log(current.data.key);
        currentNode = currentNode.next;
      }
    }
  }
}

export { HashSet };
