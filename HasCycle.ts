import ListNode from "./base/ListNode";

/**
 * 判断链表是否有环
 * @param head 链表头节点
 */
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
