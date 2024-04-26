class UpdatedDelete{
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

    updateList(index, newVal) {
        if (index < 0 || index >= this.size) {
            console.log("Invalid index");
            return;
        }

        let current = this.head;
        let currentIndex = 0;

        while (current) {
            if (currentIndex === index) {
                current.data = newVal;
                console.log("Updated element at index", index, "with value", newVal);
                break;
            }
            current = current.next;
            currentIndex++;
        }
    }

    deleteList(index) {
        if (index < 0 || index >= this.size) {
            console.log("Invalid index");
            return;
        }

        let current = this.head;
        let prevNode = null;
        let currentIndex = 0;

        if (index === 0) {
            this.head = current.next;
            this.size--;
            console.log("Deleted element at index", index);
            return;
        }

        while (current && currentIndex !== index) {
            prevNode = current;
            current = current.next;
            currentIndex++;
        }

        if (current) {
            prevNode.next = current.next;
            this.size--;
            console.log("Deleted element at index", index);
        }
    }
    

        

}

let list4 =new UpdatedDelete("list4");
list4.addList(100);
list4.addList(200);
list4.addList(300);
list4.addList(400);
list4.updateList(2,250);
list4.deleteList(3)
list4.printList();

console.log("list4 ", list4);
