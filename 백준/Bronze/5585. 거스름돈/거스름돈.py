money = int(input())

answer = 0
change = 1000 - money

coin = [500, 100, 50, 10, 5, 1]

for c in coin:
    answer += change // c
    change %= c
    
    if change == 0:
        break

print(answer)