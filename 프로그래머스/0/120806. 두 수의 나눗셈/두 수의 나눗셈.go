func solution(num1 int, num2 int) int {
    result := float64(num1) / float64(num2) * float64(1000)
    return int(result)
}