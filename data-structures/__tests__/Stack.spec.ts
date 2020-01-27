//TODO: Add unit tests using Jest
import { Stack } from './../Stack'

(() => {
    const stack = new Stack()

    stack.push(1)
    stack.push(2)
    stack.push(3)

    stack.pop();
    stack.printList();
})()