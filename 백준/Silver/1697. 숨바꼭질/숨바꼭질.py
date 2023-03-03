from collections import deque

def bfs(v):
    q = deque([v])
    while q:
        v = q.popleft()     # 시작점, x = 5
        if v == k:
            return dist[v]
        for nx in (v - 1, v + 1, v * 2):    # 4, 6, 10
            if 0 <= nx <= MAX and not dist[nx]:
                dist[nx] = dist[v] + 1
                q.append(nx)

MAX = 100000
dist = [0] * (MAX + 1)       # 이동하는 거리
n, k = map(int, input().split())
print(bfs(n))
