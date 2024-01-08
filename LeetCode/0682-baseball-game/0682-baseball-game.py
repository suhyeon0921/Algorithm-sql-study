class Solution:
    def calPoints(self, operations: List[str]) -> int:
        answer_list = []
        for oper in operations:
            if oper == "C":
                answer_list.pop()
            elif oper == "D":
                answer_list.append(int(answer_list[-1]) * 2)
            elif oper == "+":
                answer_list.append(int(answer_list[-1]) + int(answer_list[-2]))
            else:
                answer_list.append(int(oper))

        return sum(answer_list)
        