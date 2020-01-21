export class SingleLinkedList {
    public head:SingleLinkedListNode
    public tail:SingleLinkedListNode
    
    prepend(value:number) : void {
        if(!this.head) {
            this.head = this.tail = new SingleLinkedListNode(value)
        } else {
            const newHead = new SingleLinkedListNode(value)
            const currentHead = this.head
            this.head = newHead
            this.head.next = currentHead
        }
    }

    append(value:number) : void {
        if(!this.tail) {
            this.head = this.tail = new SingleLinkedListNode(value)
        } else {
            const newTail = new SingleLinkedListNode(value)
            this.tail.next = newTail
            this.tail = newTail
        }
    }


    delete(value:number) : void {
        if(!this.head) return

        if(this.head.value === value) {
            const newHead = this.head.next
            this.head = newHead
        }
        
        let current = this.head;

        while(current.next) {
            if(current.next.value === value) {
                current.next = current.next.next
            } else {
                current = current.next
            }
        }

        if(this.tail.value === value) {
            this.tail = current;
        }

    }

    deleteTail() : SingleLinkedListNode {
        const deletedTail = this.tail

        if(this.head == this.tail) {
            this.head = this.tail = (null as unknown) as SingleLinkedListNode;
            return deletedTail
        }
        
        let current = this.head;

        while(current.next) {
            if(!current.next.next) {
                current.next = (null as unknown) as SingleLinkedListNode;
            } else {
                current = current.next
            }
        }

        this.tail = current;
        return deletedTail
    }

    deleteHead() : SingleLinkedListNode {
        if(!this.head) return (null as unknown) as SingleLinkedListNode;

        const currentHead: SingleLinkedListNode = this.head;
        if(this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = this.tail = (null as unknown) as SingleLinkedListNode;
        }

        return currentHead;
    }

    printList() : void {
        let list = this.head;

        while(list) {
            console.info(list.value + " ")
            list = list.next;
        }
    }
}


export class SingleLinkedListNode {
    public value:number;
    public next:SingleLinkedListNode;
    
    constructor(value:number) {
        this.value = value;
    }
}