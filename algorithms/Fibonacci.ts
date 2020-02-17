const fibonacci = (range:number):number[] => {
    const sq:number[] = [1]

    let current:number = 1
    let previous:number = 0

    let iterationsCounter = range - 1

    while(iterationsCounter) {
        current += previous
        previous = current - previous

        sq.push(current)

        iterationsCounter -= 1
    }

    return sq;
}

const fibonacciWithStartingPoint = (start:number, range:number) => {
    const sq:number[] = [start]

    let current:number = start
    let previous:number = 0

    let iterationsCounter = range - 1

    while(iterationsCounter) {
        current += previous
        previous = current - previous

        sq.push(current)

        iterationsCounter -= 1
    }

    return sq;
} 

(() => {
    const range:number = 10
    const start:number = 3

    console.info(fibonacci(range))
    console.info(fibonacciWithStartingPoint(start, range))
})()