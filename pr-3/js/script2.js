class LinkedList{
    constructor(d){
        this.head={
            data : d,
            next : null
        }

        this.tail= this.head;
        this.size=1;

    }

    addList(value){
        let newNode={
            data : value,
            next : null
        }

        this.tail.next=newNode;
        this.tail=newNode;
        this.size++;
    }

    reverse(){
        let prev = null;
        let current = this.head;
        let next = null;

        while (current) {
            next = current.next; 
            current.next = prev; 
            prev = current; 
            current = next;
        }
        this.head = prev; 

        this.tail = this.head;
        while (this.tail && this.tail.next) {
            this.tail = this.tail.next;
        }
    }

    printList(){
        let current=this.head;
        while(current != null){
            console.log("current",current.data);
            current=current.next;
        }
    }

    
}
let list2 = new LinkedList(100);
list2.addList(200);
list2.addList(300);
list2.addList(400);
list2.addList(500);
list2.reverse();
list2.printList();

console.log("list2",list2);