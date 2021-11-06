let l1 = [1, 2, 4],
  l2 = [1, 3, 4];

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeTwoLists = function (l1, l2) {
  let curr = new ListNode();
  const data = curr;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if (l1) curr.next = l1;
  if (l2) curr.next = l2;
  return data.next;
};

console.log(mergeTwoLists(l1, l2));
