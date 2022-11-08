// data structure -  Queue

// Queue is a First In First Out type of data structure
// it has methods such as "dequeue", "enqueue", "peek", "size"

export interface IQueue<T> {
	enqueue(item: T): void;
	dequeue(): void;
	peek(): T;
	size(): number;
}

export default class Queue<T> implements IQueue<T> {
	private queue: T[] = [];
	constructor(private capacity: number = Infinity) {}
	enqueue(item: T): void {
		if (this.size() === this.capacity) {
			throw Error("Capacity has exceeded the maximum.");
		}
		this.queue.push(item);
	}
	dequeue(): void {
		this.queue.shift();
	}
	size(): number {
		return this.queue.length;
	}
	peek(): T {
		return this.queue[0];
	}
}
