
let linkedlist = require('./linkedlist.js').linkedlist;

describe("testing with linked list", () => {
    let list;
    beforeEach(() => {
        list = new linkedlist();
        list.addToHead(50);
        list.addToMiddle(76);
        list.addToTail(110);
        list.addToTail(10);
        list.addToTail(90);
    })

    it ("Add new value at the list tail", () => {
        expect(list.addToTail).toBeDefined();
        expect(list.addToTail(120).data).toEqual(120);
        expect(list.getTail.data).toEqual(120);
        expect(list.getHead.data).not.toEqual(120);
        expect(list.getHead).toBeDefined();
    })

    it("Add new value at the beggining of the list", () => {
        expect(list.addToHead).toBeDefined();
        expect(list.addToHead(150).data).toEqual(150);
        expect(list.getHead.data).toEqual(150);
        
    })

    it("Add a new value at the middle of the list", () => {
        expect(list.addToMiddle).toBeDefined();
        expect(list.addToMiddle(-50).data).toEqual(-50);
        expect((list.getTail).data).not.toEqual(-50);
    })

    it ("Delete the first element of the list", () => {
        expect(list.removeHead).toBeDefined();
        expect(list.getHead.element).not.toBeNull();
        expect(list.addToHead(120).data).toEqual(120); //added a new head value, then removed it
        expect((list.getHead).data).toEqual(120);
        expect(list.removeHead()).toBe(true);
        expect((list.getHead).data).not.toEqual(120);
        expect((list.getHead).data).toEqual(50); // after adding and deleting the head, the original head is left
    })

    it("Removes the last element of the linked list", () => {
        expect(list.removeTail).toBeDefined();
        expect(list.removeTail().data).toEqual(90);
        expect(list.getTail.data).not.toEqual(90);
        expect(list.getTail.data).toEqual(10); //the last added value is the new tail
    })

    it("Removes the value at the middle of the list", () => {
        expect(list.removeMiddle).toBeDefined();
        expect(list.printList()).toEqual('50->110->10->90->null');
        expect(list.removeMiddle()).toBe(true); //will remove 10
        expect(list.printList()).toEqual('50->110->90->null');
    })


})