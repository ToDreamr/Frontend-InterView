/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dhead = new ListNode(0, head)
    let cur = dhead
    let slow = dhead
    let count = 0
    while(cur.next) {
        cur = cur.next
        if(count === n) {
            slow = slow.next
        }else {
            count++
        }
    }
    slow.next = slow.next.next
    return dhead.next
};
const head = [1,2,3,4,5], n = 2
removeNthFromEnd(head, n)