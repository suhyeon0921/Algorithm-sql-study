import sys
input = sys.stdin.readline

def sol(lans, start, end):
    result = 0
    while start <= end:
        count = 0
        mid = (start + end) // 2

        for lan in lans:
            count += (lan // mid)
        
        if count >= n:
            result = mid
            start = mid + 1
        # elif count > n:
        #     start = mid + 1
        else:
            end = mid - 1

    return result

k, n = map(int, input().split())
lans = [int(input()) for _ in range(k)]

print(sol(lans, 1, max(lans)))