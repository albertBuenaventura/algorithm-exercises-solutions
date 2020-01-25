export class Combination {

    //Combinations with repetition
    printAllCombinationWithoutRepetition(sample:number[]) {
        for(let r=1; r<=sample.length; r++) {
            const comb:number[] = [];
            this.generateCombinationsWithoutRepetitions(sample, comb, 0, 0, r)
        }
    }     
    private generateCombinationsWithoutRepetitions(sample:number[], comb:number[], start:number, index:number, r:number){
        if(index === r) {
            console.info(comb)
            return
        }

        for(let i=start; i<sample.length; i++) {
            comb[index] = sample[i]
            this.generateCombinationsWithoutRepetitions(sample, comb, i + 1, index + 1, r)
        }
    }

    //Combinations with repetition
    printAllCombinationWithRepetition(sample:number[]) {
        for(let r=1; r<=sample.length; r++) {
            const comb:number[] = [];
            this.generateCombinationsWithRepetitions(sample, comb, 0, r)
        }
    }     
    private generateCombinationsWithRepetitions(sample:number[], comb:number[], index:number, r:number){
        if(index === r) {
            console.info(comb)
            return
        }

        for(let i=0; i<sample.length; i++) {
            comb[index] = sample[i]
            this.generateCombinationsWithRepetitions(sample, comb, index + 1, r)
        }
    }
}

//Sample usage
( () => {
    const combination = new Combination()
    const sample:number[] = [1, 2, 3]

    console.info('---------- Combinations without Repetition ---------')
    combination.printAllCombinationWithoutRepetition(sample)

    console.info('---------- Combinations with Repetition ---------')
    combination.printAllCombinationWithRepetition(sample)
})()