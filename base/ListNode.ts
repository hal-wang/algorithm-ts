export default class ListNode {
  val: number;
  next: ListNode | null;
  constructor(x: number, next: ListNode | null) {
    this.val = x;
    this.next = next;
  }
}
