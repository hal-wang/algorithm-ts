import ListNode from "./base/ListNode";

/**
 * 反转链表
 * @param head 链表头节点
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

/**
 * 测试
 */
function test() {
  let result = reverseList(
    new ListNode(1, new ListNode(2, new ListNode(3, null)))
  );
  if (result) {
    do {
      console.log(result.val);
      result = result.next;
    } while (result);
  }
}

test();
