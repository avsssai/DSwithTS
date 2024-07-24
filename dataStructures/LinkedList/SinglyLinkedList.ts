export class LinkNode<T> {
  value: T | null = null;
  next: LinkNode<T> | null = null;
  constructor(val?: T) {
    if (val) {
      this.value = val;
    }
  }
}

export class SinglyLinkedList<T> {
  head: LinkNode<T> | null = null;
  size: number = 0;
  insert(val: T): void {
    const newNode = new LinkNode(val);
    if (!this.head) {
      this.head = newNode;
      this.size++;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.size++;
    return;
  }
  traverse(): T[] {
    let current = this.head;
    let list: T[] = [];
    while (current && current.value) {
      list.push(current.value);
      current = current.next;
    }
    return list;
  }
  search(val: T): boolean {
    let current = this.head;
    while (current && current.value) {
      if (current.value === val) return true;
      current = current.next;
    }
    return false;
  }
  remove(val: T): boolean {
    if (!this.head) return false;
    if (this.head.value === val) {
      this.head = this.head.next;
      this.size--;
      return true;
    }
    let current = this.head;
    while (current.next && current.next.value !== val) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
      this.size--;
      return true;
    }
    return false;
  }

  reverse(): void {
    let prev: LinkNode<T> | null = null;
    let cur = this.head;
    let next: LinkNode<T> | null = null;
    while (cur) {
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
  }
}
