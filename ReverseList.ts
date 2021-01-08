import ListNode from "./ListNode";

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * @param head ListNode类
 * @return ListNode类
 */
export function reverseList(head: ListNode): ListNode | null {
  if (!head) return head;
  const next = head.next;
  head.next = null;
  return reverse(head, next);
}

function reverse(lastItem: ListNode, currentItem: ListNode | null): ListNode {
  if (!currentItem) return lastItem;

  const nextItem = currentItem.next;
  currentItem.next = lastItem;

  return reverse(currentItem, nextItem);
}

let result = reverseList(
  new ListNode(1, new ListNode(2, new ListNode(3, null)))
);
if (result) {
  do {
    console.log(result.val);
    result = result.next;
  } while (result);
}
