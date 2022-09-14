import { queue, queue } from "./queue.mjs";

let queue = new queue();

console.log("===== enqueue =====");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.front());

console.log("===== dequeue =====");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(`isEmpty ${queue.isEmpty()}`);
