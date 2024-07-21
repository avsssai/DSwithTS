export class DoublyLinkedListNode<T> {
  value: T | null;
  next: DoublyLinkedListNode<T> | null = null;
  prev: DoublyLinkedListNode<T> | null = null;

  constructor(val: T) {
    this.value = val;
  }
}

export class DoublyLinkedList<T> {
  head: DoublyLinkedListNode<T> | null = null;
  tail: DoublyLinkedListNode<T> | null;
  length: number = 0;

  // add a node at the end
  append(val: T) {
    let newNode = new DoublyLinkedListNode(val);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  // add a node at the start
  prepend(val: T) {
    const newNode = new DoublyLinkedListNode(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  remove(val: T): boolean {
    let cur = this.head;
    while (cur) {
      if (cur.value === val) {
        if (cur.prev) {
          cur.prev.next = cur.next;
        } else {
          this.head = cur.next;
        }

        if (cur.next) {
          cur.next.prev = cur.prev;
        } else {
          this.tail = cur.prev;
        }
        this.length--;
        return true;
      }
      cur = cur.next;
    }
    return false;
  }
  find(val: T): DoublyLinkedListNode<T> | null {
    let cur = this.head;
    while (cur) {
      if (cur.value === val) {
        return cur;
      }

      cur = cur.next;
    }
    return null;
  }
  toJson(): Array<T> {
    let values: T[] = [];
    let cur = this.head;
    while (cur && cur.value) {
      values.push(cur.value);
      cur = cur.next;
    }
    return values;
  }

  print(): string {
    let allItems = this.toJson();
    return allItems.join("<->");
  }
}
