def solution(s):
    answer = []
    times = 0
    s_num = 0

    while s != "1":
        s_num += s.count("0")
        s = s.replace("0", "")
        c = len(s)
        s = bin(int(c))[2:]
        times += 1

    answer.append(times)
    answer.append(s_num)

    return answer