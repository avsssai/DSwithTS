import { LinkNode, SinglyLinkedList } from "./SinglyLinkedList";

describe("tests the singly linked list", () => {
  test("A single link node creation without any val", () => {
    let linkNode = new LinkNode();
    expect(linkNode.value).toBeNull();
    expect(linkNode.next).toBeNull();
  });
  test("A single link node creation with a val", () => {
    let linkNode = new LinkNode(42);
    expect(linkNode.value).toBe(42);
    expect(linkNode.next).toBeNull();
  });
  test("Linked list insert inserts into the list at the end", () => {
    let linkedList = new SinglyLinkedList();
    linkedList.insert(42);
    expect(linkedList.size).toBe(1);
    expect(linkedList.traverse()).toStrictEqual([42]);
  });
  test("search for an element in the linked list", () => {
    let linkedList = new SinglyLinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);
    expect(linkedList.search(3)).toBe(true);
    expect(linkedList.search(31)).toBe(false);
  });
  test("remove a value from linked list", () => {
    let linkedList = new SinglyLinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);
    expect(linkedList.traverse()).toStrictEqual([1, 2, 3, 4]);
    expect(linkedList.size).toBe(4);
    linkedList.remove(3);
    expect(linkedList.traverse()).toStrictEqual([1, 2, 4]);
    expect(linkedList.size).toBe(3);
    linkedList.remove(4);
    expect(linkedList.traverse()).toStrictEqual([1, 2]);
    expect(linkedList.size).toBe(2);
  });
  test("reversing a single linked list", () => {
    let linkedList = new SinglyLinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);
    linkedList.insert(5);
    expect(linkedList.traverse()).toStrictEqual([1, 2, 3, 4, 5]);
    linkedList.reverse();
    expect(linkedList.traverse()).toStrictEqual([5, 4, 3, 2, 1]);
  });
});
