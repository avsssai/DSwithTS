export class MaxHeap {
  public heap: number[];

  constructor() {
    this.heap = [];
  }

  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private leftChild(index: number): number {
    return index * 2 + 1;
  }

  private rightChild(index: number): number {
    return index * 2 + 2;
  }

  public heapifyUp(): void {
    let index = this.heap.length - 1;
    while (index > 0 && this.heap[this.parent(index)] < this.heap[index]) {
      this.swap(this.heap, index, this.parent(index));
    }
  }
  public insert(val: number): void {
    this.heap.push(val);
    this.heapifyUp();
  }

  public removeMax(): number | null {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop() || null;

    let root = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);
    return root;
  }

  private heapifyDown(index: number): void {
    let largest = index;
    let leftChildIndex = this.leftChild(index);
    let rightChildIndex = this.rightChild(index);
    while (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] > this.heap[largest]
    ) {
      largest = leftChildIndex;
    }
    while (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] > this.heap[largest]
    ) {
      largest = rightChildIndex;
    }
    if (largest !== index) {
      this.swap(this.heap, largest, index);
      this.heapifyDown(largest);
    }
  }

  public peek(): number | undefined {
    return this.heap.length > 0 ? this.heap[0] : undefined;
  }

  private swap(arr: number[], first: number, second: number) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
  }
}
