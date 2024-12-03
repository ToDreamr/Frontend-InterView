/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head === null || head.next === null)
        return head
    const res = head.next
    let prev = head
    while(head && head.next) {
        const node1 = head.next
        const node2 = head.next.next
        head.next = node2
        node1.next = head
/*        prev.next = node1

        prev = head*/
        head = head.next
    }
    return res
};