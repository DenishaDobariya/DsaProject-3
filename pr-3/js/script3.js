class MiddleDelete{
    constructor(d){
        this.head ={
            prev : null,
            data : d,
            next : null
        }
        this.tail = this.head;
        this.size = 1 ;
    }

    addList(val) {
        let current = this.head;
        let newNode = {
            prev: null,
            data: val,
            next: null
        };
    
        while (current) {
            newNode.prev  =current; 
            current = current.next;
        }
    
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }
    
    deleteMiddle() {
        if (!this.head || !this.head.next) {
            return;
        }

        let slowPointer = this.head;
        let fastPointer = this.head;
        let prevPointer = null;

        while (fastPointer && fastPointer.next && fastPointer.next.next) {
            prevPointer = slowPointer;
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }

        if (prevPointer) {
            prevPointer.next = slowPointer.next;
        }

        this.size--;
    }

    printList(){
        let current= this.head;
        while(current){
            console.log("data", current.data);
            current=current.next;
        }
    }

}

let list3 =new MiddleDelete("list3");
list3.addList(100);
list3.addList(200);
list3.addList(300);
list3.addList(400);
list3.deleteMiddle();
list3.printList();

console.log("list3 ", list3);
