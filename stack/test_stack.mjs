import { Stack } from "./stack.mjs";

let stack = new Stack();

console.log("===== 첫 번째 출력 =====");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
//데이터를 스택에 푸쉬

console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
// 5 4 3 2 1 순으로 나오는지 확인

console.log("===== 두 번째 출력 =====");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.peek().data);
//5가출력되는지 확인
stack.pop();
//5를 팝하고
console.log(stack.peek().data);
//4가 출력되는지 확인
console.log(`isEmpty: ${stack.isEmpty()}`);
//값이 0이 아니기 때문에 False 반환
stack.pop();
stack.pop();
stack.pop();
stack.pop();
// 4 3 2 1 모두 팝시킨다.
console.log(`isEmpty: ${stack.isEmpty()}`);
//값이 0이기 때문에 True
console.log(stack.pop());
//null 확인
