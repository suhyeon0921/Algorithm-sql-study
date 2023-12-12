var removeNthFromEnd = function(head, n) {
    head = new ListNode(null, head);
    let start = head;
    let end = head;
    while(n--) {
      end = end.next;
    }  
    while(end && end.next) {
      [start, end] = [start.next, end.next];
    } 
    
    start.next = start.next.next;
    return head.next;
};