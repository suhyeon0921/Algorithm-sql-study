def solution(price, money, count):
    useMoney = [price * c for c in range(1, count + 1)]
    total = sum(useMoney)
    if total > money:
        answer = total - money
    else:
        answer = 0
    
    return answer