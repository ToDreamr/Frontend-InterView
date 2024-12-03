/**
 * @Description:
 * 用 JavaScript 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等
 * */
function fibonacci(n) {
    let dp = new Array(n + 1)
    dp[1] = 1
    dp[2] = 1
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}