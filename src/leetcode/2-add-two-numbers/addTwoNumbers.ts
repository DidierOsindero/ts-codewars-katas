/**
 * Definition for singly-linked list.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/*
OVERVIEW:
1. Create a new LinkedList 
2. Iterate through L1 and L2 using a while loop - Whilst one of them is still true or CARRY is true
3. set SUM to sum of L1 current node, L2 current node and CARRY 
4. set CARRY back to 0
5. assign NEW_LIST current node to SUM if it is less than 10
- If SUM is at least 10, set CARRY to 1 and set NEW_LIST current node to SUM % 10

PSEUDOCODE:

set RETURN_LIST to a new ListNode
set CURRENT_NODE to RETURN_LIST
set CARRY to 0

WHILE L1 or L2 or CARRY is truthy:
    if L1 is null set to new ListNode
    if L2 is null set to new ListNode
    set SUM to L1 + L2 + CARRY
    set CURRENT_NODE.val to SUM % 10
    set CARRY to SUM / 10 floor value

    set L1 to L1.next
    set L2 to L2.next

    if (L1 or L2 or CARRY is truthy):
        set CURRENT_NODE to CURRENT_NODE.next
        set CURRENT_NODE.next to a new ListNode

    return RETURN_LIST
*/

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const returnList: ListNode = new ListNode();
  let currentNode: ListNode = returnList;
  let carry = 0;

  while (l1 || l2 || carry) {
    if (l1 === null) l1 = new ListNode();
    if (l2 === null) l2 = new ListNode();

    const sum = l1.val + l2.val + carry;
    currentNode.val = sum % 10;
    carry = Math.floor(sum / 10);

    l1 = l1?.next ? l1.next : null;
    l2 = l2?.next ? l2.next : null;

    if (l1 || l2 || carry) {
      currentNode.next = new ListNode();
      currentNode = currentNode.next;
    }
  }

  return returnList;
}
