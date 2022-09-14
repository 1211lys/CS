import { LinkedList } from "../linkedlist/LinkedList.mjs";

class Stack {
  constructor() {
    this.list = new LinkedList();
    //생성자를 만들어 스택이 초기화할때 빈 리스트를 생성
  }

  push(data) {
    this.list.insertAt(0, data);
    //index 0번에 데이터를 삽입
    //연결리스트의 head에 삽입한다는 의미
  }

  pop() {
    try {
      return this.list.deleteAte(0);
      //index 0번에 데이터를 삭제
    } catch (e) {
      return null;
      //없을경우에 null 반환
    }
  }

  peek() {
    return this.list.getNodeAt(0);
    //스택의 top에 있는 데이터를 참조만하고 데이터를 제거를 하지는 않음
    //연결리스트의 GetNodeAt()함수로 첫번째 데이터를 읽어오고 리턴한다.
  }

  isEmpty() {
    return this.list.count == 0;
    //isEmpty() 함수는 스택이 비어있으면 true를 반환
    //이는 연결리스트의 Count를 0과 비교
  }
}

export { Stack };
