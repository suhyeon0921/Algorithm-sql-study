t = int(input())

for _ in range(t):
    mars = input().split()
    answer = 0
    
    for i in range(len(mars)):
        if i == 0:
            answer = answer + float(mars[i])
        else:
            if mars[i] == '@':
                answer *= 3
            elif mars[i] == '%':
                answer += 5
            elif mars[i] == '#':
                answer -= 7
                
    print("{:.2f}".format(answer))