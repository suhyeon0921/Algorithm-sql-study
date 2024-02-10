import sys

N = int(input())
group_word = 0

for _ in range(N):
    word = sys.stdin.readline()
    check = True
    for i in range(len(word) - 1):
        if word[i] != word[i + 1]:
            if word[i] in word[i + 1 : ]:
                check = False
                break
    if check:
        group_word += 1
print(group_word)