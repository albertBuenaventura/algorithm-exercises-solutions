import { SingleLinkedList, SingleLinkedListNode } from './SingleLinkedList'

export class Queue {
    private linkedList: SingleLinkedList

    constructor() {
        this.linkedList = new SingleLinkedList()
    }

    isEmpty() : boolean {
        return !this.linkedList.head
    }
    enqueue(value:number) : void {
        this.linkedList.append(value)
    }

    dequeue() : SingleLinkedListNode {
        const currentHead = this.linkedList.deleteHead()
        return currentHead
    }

    printList() : void {
        while(!this.isEmpty()) {
            const list =  this.dequeue()
            console.info(list.value)
        }
    }
}