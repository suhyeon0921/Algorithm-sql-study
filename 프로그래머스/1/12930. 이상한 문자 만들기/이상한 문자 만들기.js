function solution(s) {
    return s.split(' ')
        .map(i => 
            i.split('')
             .map((j, index) => (index % 2 === 0 ? j.toUpperCase() : j.toLowerCase()))
             .join('')
            )
    .join(' ')
}