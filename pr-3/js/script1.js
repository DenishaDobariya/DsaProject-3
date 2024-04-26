class Middle{
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
    

    printList(){
        let current= this.head;
        while(current){
            console.log("data", current.data);
            current=current.next;
        }
    }

    
    findMiddle() {
        if (!this.head) {
            return null; 
        }

        let slowPointer = this.head;
        let fastPointer = this.head;

        while (fastPointer && fastPointer.next && fastPointer.next.next) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }
        console.log("Midddle", slowPointer);
        return slowPointer;
    }


}

let list =new Middle("list1");
list.addList(100);
list.addList(200);
list.addList(300);
list.addList(400);
list.findMiddle();
list.printList();

console.log("list ", list);
