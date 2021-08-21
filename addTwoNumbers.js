let l1 = [2, 4, 3],
  l2 = [5, 6, 4];

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0),
    carry = 0,
    sum = 0;
  let now = head,
    a = l1,
    b = l2;
  while (a !== null || b !== null) {
    sum = (a ? a.val : 0) + (b ? b.val : 0) + carry;
    carry = Math.floor(sum / 10);
    now.next = new ListNode(sum % 10);
    now = now.next;
    a = a ? a.next : null;
    b = b ? b.next : null;
  }
  if (carry) {
    now.next = new ListNode(carry);
  }
  return head.next;
};
console.log(addTwoNumbers(ListNode(l1), ListNode(l2)));
