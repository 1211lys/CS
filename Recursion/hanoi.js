function hanoi(count, A, C, B) {
  if (count == 0) return;
  hanoi(count - 1, A, B, C);
  // 원반 1, 2가 기둥 a에서 시작
  // 원반 1, 2가 기둥 b로 이동
  // 원반 1, 2를 a에서 b로 이동하는데 c를 임시로 사용
  console.log(`원반 ${count}를 ${A}에서 ${C}로 이동`);
  hanoi(count - 1, B, C, A);
}

hanoi(3, "a", "c", "b");
