/**
 * Algo used: DFS and Backtracking
 */

export class FindLongestPath {
    private readonly dx:number[] = [0, 0, 1, -1];
    private readonly dy:number[] = [1, -1, 0, 0];

    private map:number[][]
    private size:number
    private goalY:number
    private goalX:number
    private max:number
    private visited:boolean[][];
    constructor(map:number[][], size:number, goalY:number, goalX:number) {
        this.map = map
        this.size = size
        this.goalY = goalY
        this.goalX = goalX
        this.max = Number.MIN_VALUE
        this.visited = new Array(size).fill(false).map(() => new Array(size).fill(false))
    }

    getMaxSteps(y:number, x:number, steps:number) : number {
        if(y === this.goalY && x === this.goalX) {
            if(steps > this.max) this.max = steps
            return this.max
        }

        this.visited[y][x] = true
        for(let i=0; i<4; i++) {
            const ny =  y + this.dy[i]
            const nx =  x + this.dx[i]

            if(nx < 0 || nx >=this.size || ny < 0 || ny >= this.size || this.map[ny][nx] === 0 || this.visited[ny][nx]) continue
            this.getMaxSteps(ny, nx, steps + 1)
        }
        this.visited[y][x] = false
        return this.max
    }
}

( () => {
    const size:number = 10 //size of map grid
    const map:number[][] = [
        [ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 ],
        [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 1 ],
        [ 1, 1, 1, 0, 1, 1, 0, 1, 0, 1 ],
        [ 0, 0, 0, 0, 1, 0, 0, 1, 0, 0 ],
        [ 1, 0, 0, 0, 1, 1, 1, 1, 1, 1 ],
        [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
        [ 1, 0, 0, 0, 1, 0, 0, 1, 0, 1 ],
        [ 1, 0, 1, 1, 1, 1, 0, 0, 1, 1 ],
        [ 1, 1, 0, 0, 1, 0, 0, 0, 0, 1 ],
        [ 1, 0, 1, 1, 1, 1, 0, 1, 0, 0 ]
    ]
    const longestPath = new FindLongestPath(map, size, 5, 7)
    
    //it will start on 0-0 index with 0 steps
    console.info(longestPath.getMaxSteps(0, 0, 0))

})()