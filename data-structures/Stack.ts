import { SingleLinkedList, SingleLinkedListNode } from './SingleLinkedList'

export class Stack {
    private linkedList: SingleLinkedList

    constructor() {
        this.linkedList = new SingleLinkedList()
    }

    isEmpty() : boolean {
        return !this.linkedList.head
    }
    
    push(value:number) : void {
        this.linkedList.prepend(value)
    }

    pop() : SingleLinkedListNode {
        const currentHead = this.linkedList.deleteHead()
        return currentHead
    }

    printList() : void {
        while(!this.isEmpty()) {
            const list =  this.pop()
            console.info(list.value)
        }
    }
}