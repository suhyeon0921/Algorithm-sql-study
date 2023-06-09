function solution(n) {
    var dp = [0n, 1n];
    dp[0] = 0, dp[1] = 1
    for (let i = 2; i <= n; i++) {
        dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
    }
    return dp[n] % 1234567n;
}
