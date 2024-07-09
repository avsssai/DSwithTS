import { MaxHeap } from "./MaxHeap";

describe("Testing the max heap", () => {
  let heap: MaxHeap;
  beforeEach(() => {
    heap = new MaxHeap();
    heap.insert(10);
    heap.insert(20);
    heap.insert(4);
  });

  test("should insert elements and maintain max heap property", () => {
    expect(heap.peek()).toBe(20);
  });

  test("should remove and return max element", () => {
    let max = heap.removeMax();
    expect(max).toBe(20);
    expect(heap.peek()).toBe(10);
  });

  test("should handle removeMax when the heap is empty", () => {
    heap.removeMax();
    heap.removeMax();
    heap.removeMax();

    expect(heap.peek()).toBeUndefined();
  });
});
