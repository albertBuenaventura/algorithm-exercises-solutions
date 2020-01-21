import { SingleLinkedList } from './../SingleLinkedList'

(() =>  {
    const singleLinkedList =  new SingleLinkedList();
    
    singleLinkedList.append(1);
    singleLinkedList.prepend(2);
    singleLinkedList.append(3);
    singleLinkedList.prepend(4);
    singleLinkedList.prepend(5);
    singleLinkedList.append(6);
    singleLinkedList.append(7);

    singleLinkedList.delete(7);
    singleLinkedList.delete(5);

    singleLinkedList.deleteTail();
    singleLinkedList.deleteHead();

    singleLinkedList.printList();
})()