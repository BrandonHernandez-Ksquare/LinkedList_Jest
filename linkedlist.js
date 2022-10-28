
class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    };
};

class linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    };

    get getHead(){
        return this.head;
    }

    get getTail(){
        let currentValue = this.head;
        while (currentValue.next){
            currentValue = currentValue.next;
        }
        return currentValue;
    }


    /* ----------------------------------------Methods ---------------------------------------- */

    // Add to end Method
    addToTail(data) {
        const newNode = new Node(data, null)
        if (!this.head) {
            this.head = newNode
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size += 1;
        return newNode;
    }


    // Add to Middle Method
    addToMiddle(data) {
        let internSize = 0;
        let middleFlag = Math.floor(this.size / 2);
        const newNode = new Node(data, null);
        let current = this.head;
        let previous;


        if (this.size === 0 || this.size === 1) {
            console.log("There is no more than 2 nodes to put this one in the middle of them")
        }
        else {

            while (internSize < middleFlag) {
                internSize += 1;
                previous = current;
                current = current.next;
            }

            newNode.next = current;
            previous.next = newNode
        }
        this.size += 1;
        return newNode;
    }


    // Add to start Method
    addToHead(data) {
        const newNode = new Node(data, null);
        let previous = null;
        if (!this.head) {
            this.head = newNode
        }
        else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.size += 1;
        return newNode;
    }



    // Remove from end Method
    removeTail() {
        let previous = null;
        let current = this.head;
        let removed;

        if (!this.head) {
            console.log("There is nothing to be removed");
        }
        else {
            while (current != null) {
                if (current.next === null) {
                    previous.next = null
                    this.size -= 1;
                }
                previous = current;
                removed = current;
                current = current.next;
            }
        }
        return removed;
    }


    // Remove from middle Method
    removeMiddle() {
        let internSize = 0;
        let middleFlag = Math.floor(this.size / 2);
        let current = this.head;
        let previous;
        let removed;


        if (!this.head) {
            console.log("There is nothing to be removed")
        }
        else {

            while (internSize < middleFlag) {
                internSize += 1;
                previous = current;
                current = current.next;
            }

            previous.next = current.next
            return true;
        }
        this.size -= 1;
    }


    // Remove from start Method
    removeHead() {
        let previous = null;
        if (!this.head) {
            console.log("There is nothing to be removed")
            this.head = null
        }
        else {
            let current = this.head.next;
            this.head = current
            this.size -= 1;
            return true;
        }
    }


    // Sort Method
    sortList() {
        let aux;
        let i = this.size;
        while (i > 0) {
            let current = this.head;
            while (current.next != null) {
                if (current.data > current.next.data) {
                    aux = current.data;
                    current.data = current.next.data;
                    current.next.data = aux
                }
                current = current.next
            }
            i -= 1;
        }
    }

    orderList() {
        let current = this.head;
        let array = [];
        while (current) {
            array.push(current.data)
            current = current.next;
        }
        return array.sort(function(a,b){return b -a});
    }

    invertList(){
        let current = this.head;
        let array = [];
        while(current) {
            array.push(current.data)
            current = current.next;
        }
        return array.reverse();
    }
    
    printList() {
        //we print the list values as a string for a more clear interpretation of itself
        let current = this.head;
        let str = "";
        while (current) {
            str += current.data + "->";
            current = current.next;
        }
        return str +'null'
        }

}

const ll = new linkedlist;


module.exports.linkedlist = linkedlist;