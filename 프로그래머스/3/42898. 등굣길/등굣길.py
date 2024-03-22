def solution(m, n, puddles):
    answer = 0
    dp = [[0] * (m + 1) for _ in range(n + 1)]
    dp[1][1] = 1
    
    for (y, x) in puddles:
        dp[x][y] = -1
    
    for x in range(1, n + 1):
        for y in range(1, m + 1):
            if dp[x][y] != -1:
                if x > 1 and dp[x - 1][y] != -1:
                    dp[x][y] += dp[x - 1][y]
                if y > 1 and dp[x][y - 1] != -1:
                    dp[x][y] += dp[x][y - 1]
    
    return dp[n][m] % 1000000007