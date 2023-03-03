import sys
input = sys.stdin.readline

n = int(input())
length = [int(input()) for _ in range(n)]
length.sort()

for i in range(len(length) - 1, 1, -1):
    if length[i] < length[i - 1] + length[i - 2]:
        print(length[i] + length[i - 1] + length[i - 2])
        exit()

print(-1)