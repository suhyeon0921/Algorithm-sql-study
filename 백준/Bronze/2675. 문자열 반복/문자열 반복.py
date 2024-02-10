t = int(input())
for _ in range(t):
    r, s = input().split()
    
    answer = ''
    for i in range(len(s)):
        answer += int(r) * s[i]
    print(answer)