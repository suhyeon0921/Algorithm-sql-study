func solution(numbers []int) float64 {
    sum := 0
    for _, n := range numbers {
        sum += n
    }
    return float64(sum) / float64(len(numbers))
}