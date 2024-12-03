/*
/!**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *!/
/!**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 *!/
var mergeTwoLists = function(list1, list2) {
    if(list1 === null || list2 === null)
        return list1 === null ? list2 : list1
    let resHead = new ListNode(0, Math.min(list1.val,list2.val))
    let flag = resHead
    if(list1.val > list2.val) {
        resHead.val = list2.val
        list2 = list2.next
    }else {
        resHead.val = list1.val
        list1 = list1.next
    }
    while(list1!==null || list2!==null) {
        let listVal1 = list1 ? list1.val : 999999999
        let listVal2 = list2 ? list2.val : 999999999
        if(listVal1 > listVal2) {
            flag.next = list2
            list2 = list2.next
            flag = flag.next
            console.log(list2)
        }else {
            flag.next = list1
            list1 = list1.next
            flag = flag.next
            console.log(list1)
        }
    }
    return resHead
};*/
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

