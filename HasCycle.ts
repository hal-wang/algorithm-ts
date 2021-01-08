class ListNode {
  val: number;
  next: ListNode | null;
  constructor(x: number, next: ListNode | null) {
    this.val = x;
    this.next = next;
  }
}

export function hasCycle(head: ListNode): boolean {
  if (!head) return false;
  const items = <ListNode[]>[];

  let next = head.next;
  while (next) {
    if (items.includes(next)) return true;

    items.push(next);
    next = next.next;
  }
  return false;
}
