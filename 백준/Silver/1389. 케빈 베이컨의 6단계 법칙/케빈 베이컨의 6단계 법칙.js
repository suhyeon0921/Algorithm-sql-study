// 케빈 베이컨의 6단계 법칙

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map((value) => +value));

const [N, M] = input.shift();
const graph = Array.from({ length: N + 1 }, () => []);
const result = [];

// 친구 관계를 그래프로 정리
for (let i = 0; i < M; i++) {
  const [A, B] = input[i];
  graph[A].push(B);
  graph[B].push(A);
}

const BFS = (start, target) => {
  const queue = [[start, 0]];
  const visited = Array.from({ length: N + 1 }, () => false);
  while (queue.length) {
    let [cur, count] = queue.shift();
    let friend = graph[cur];
    if (visited[cur]) continue;
    visited[cur] = true;
    if (cur === target) return count;

    // 그래프에서 가져온 친구관계를 순회하며 queue에 추가
    for (let i = 0; i < friend.length; i++) {
      let value = friend[i];
      if (visited[value]) continue;
      queue.push([value, count + 1]);
    }
  }
};

// 1번부터 순차적으로 친구관계를 확인해야하기에 반복문을 통해 BFS 실행
for (let i = 0; i < N; i++) {
  let count = 0;
  for (let j = 1; j <= N; j++) {
    count += BFS(i + 1, j); // 리턴된 값들을 count에 더해준다
  }
  result.push(count);
}

let min = Math.min(...result); // 케빈 베이컨의 수가 가장 작은것을 찾는다
console.log(result.indexOf(min) + 1); // 배열에서 가장 작은 수의 맨앞 인덱스를 출력한다
