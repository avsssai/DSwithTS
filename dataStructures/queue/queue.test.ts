import Queue, { IQueue } from "./queue";

describe("testing the queue data structure", () => {
	let queue: IQueue<string>;
	beforeAll(() => {
		queue = new Queue();
	});

	test("queue has been initiated", () => {
		expect(queue.size()).toBe(0);
	});

	test("adding an item to the queue", () => {
		queue.enqueue("first item");
		expect(queue.peek()).toBe("first item");
		expect(queue.size()).toBe(1);
	});
	// test("peeking the queue", () => {
	// 	let firstElement = queue[0];
	// 	expect(queue.peek()).toBe(firstElement);
	// });
	test("removing an item to the queue", () => {
		queue.enqueue("random");
		let expectedSize = queue.size() - 1;
		queue.dequeue();
		console.log(queue.size());
		expect(queue.size()).toBe(expectedSize);
	});
	test("size of the queue", () => {
		let beforeSize = queue.size();
		queue.enqueue("item 1");
		expect(queue.size()).toBe(beforeSize + 1);
		let beforeRemovalSize = queue.size();
		queue.dequeue();
		expect(queue.size()).toBe(beforeRemovalSize - 1);
	});
});
