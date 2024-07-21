import { DoublyLinkedList, DoublyLinkedListNode } from "./DoublyLinkedList";

describe("testing the doubly linked list", () => {
  test("testing initializing of the linked node", () => {
    let doubleLinkNode = new DoublyLinkedListNode(3);
    expect(doubleLinkNode.value).toBe(3);
    expect(doubleLinkNode.prev).toBeNull();
  });
  test("testing the append in a doubly linked list", () => {
    let dblLinkedList = new DoublyLinkedList();

    dblLinkedList.append(4);
    expect(dblLinkedList.length).toBe(1);
    expect(dblLinkedList.head?.value).toBe(4);
    expect(dblLinkedList.head?.prev).toBe(null);
    dblLinkedList.append(3);
    dblLinkedList.append(2);
    dblLinkedList.append(1);
    expect(dblLinkedList.tail).toBe(1);
    expect(dblLinkedList.length).toBe(4);
  });
});
