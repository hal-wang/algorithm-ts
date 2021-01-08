import TreeNode from "./base/TreeNode";

/**
 * 分别按照二叉树先序，中序和后序打印所有的节点。
 * @param root the root of binary tree
 */
export function threeOrders(root: TreeNode): number[][] {
  return [preorder(root), inorder(root), postorder(root)];
}

function preorder(root: TreeNode): number[] {
  const result = <number[]>[];
  result.push(root.val);
  if (root.left) {
    result.push(...preorder(root.left));
  }
  if (root.right) {
    result.push(...preorder(root.right));
  }
  return result;
}

function inorder(root: TreeNode): number[] {
  const result = <number[]>[];
  if (root.left) {
    result.push(...inorder(root.left));
  }
  result.push(root.val);
  if (root.right) {
    result.push(...inorder(root.right));
  }
  return result;
}

function postorder(root: TreeNode): number[] {
  const result = <number[]>[];
  if (root.left) {
    result.push(...postorder(root.left));
  }
  if (root.right) {
    result.push(...postorder(root.right));
  }
  result.push(root.val);
  return result;
}
