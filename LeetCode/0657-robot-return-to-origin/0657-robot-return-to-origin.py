class Solution:
    def judgeCircle(self, moves: str) -> bool:
        steps = {
            "R" : [1, 1],
            "L" : [1, -1],
            "U" : [0, 1],
            "D" : [0, -1]
        }
        origin = [0, 0]

        for m in moves:
            dir, diff = steps[m]
            origin[dir] += diff
        
        return origin[0] == origin[1] == 0
        