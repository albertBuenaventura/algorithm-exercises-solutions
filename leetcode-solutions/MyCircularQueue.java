//https://leetcode.com/problems/design-circular-queue/

class MyCircularQueue {
	int front, rear, current, max;
	int[] queue;
    /** Initialize your data structure here. Set the size of the queue to be k. */
    public MyCircularQueue(int k) {
    	this.max = k;
    	current = 0;
		front = rear = -1;
		queue = new int[k];
    }
    
    /** Insert an element into the circular queue. Return true if the operation is successful. */
    public boolean enQueue(int value) {
    	if (isFull()) return false;
		if (front == -1) front = 0;
		rear = (rear + 1) % max;
		queue[rear] = value;
		current++;
		return true;
    }
    
    /** Delete an element from the circular queue. Return true if the operation is successful. */
    public boolean deQueue() {
    	if (isEmpty()) return false;
		front = (front + 1) % max;
		current--;
		return true;
    }
    
    /** Get the front item from the queue. */
    public int Front() {
    	if(isEmpty()) return -1;
        return queue[front];
    }
    
    /** Get the last item from the queue. */
    public int Rear() {
    	if(isEmpty()) return -1;
        return queue[rear];
    }
    
    /** Checks whether the circular queue is empty or not. */
    public boolean isEmpty() {
    	return current == 0;
    }
    
    /** Checks whether the circular queue is full or not. */
    public boolean isFull() {
    	return current == max;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue obj = new MyCircularQueue(k);
 * boolean param_1 = obj.enQueue(value);
 * boolean param_2 = obj.deQueue();
 * int param_3 = obj.Front();
 * int param_4 = obj.Rear();
 * boolean param_5 = obj.isEmpty();
 * boolean param_6 = obj.isFull();
 */