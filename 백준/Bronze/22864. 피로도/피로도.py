import sys

a, b, c, m = map(int, sys.stdin.readline().split())
day = 0
fatigue = 0
result = 0

while day != 24:
    day += 1
    
    if a + fatigue <= m:
        result += b
        fatigue += a
    else:
        if fatigue >= c:
            fatigue -= c
        else:
            fatigue = 0

print(result)