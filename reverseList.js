let head = [1, 2, 3, 4, 5];
const reverseList = function (head) {
  let previous = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous.sort((a, b) => b - a);
};
console.log(reverseList(head));
