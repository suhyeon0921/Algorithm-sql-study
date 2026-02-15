def solution(s):
    # 짝수
    if len(s) % 2 == 0:
        mid = len(s) // 2
        answer = s[mid - 1 : mid + 1]
    # 홀수
    else:
        mid = (len(s) // 2)
        answer = s[mid]
    return answer