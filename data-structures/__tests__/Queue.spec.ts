//TODO: Add unit tests using Jest
import { Queue } from './../Queue'

(() => {
    const queue = new Queue()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)

    queue.dequeue();
    queue.printList();
})()