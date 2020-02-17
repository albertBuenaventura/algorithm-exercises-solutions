const fibonacci = (n:number):number[] => {
    const sq:number[] = [1]

    let current:number = 1
    let previous:number = 0

    let iterationsCounter = n - 1

    while(iterationsCounter) {
        current += previous
        previous = current - previous

        sq.push(current)

        iterationsCounter -= 1
    }

    return sq;
}

(() => {
    const numberOfSequence:number = 10
    const fibonacciSequence:number[] = fibonacci(numberOfSequence)

    console.info(fibonacciSequence)
})()