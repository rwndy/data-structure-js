const createStack = () => {
  let array = [];

  return {
    push: item => {
      array.push(item);
    },
    pop: () => array.pop(),
    peek: () => array[array.length - 1],
    size: () => array.length,
  };
};

const bookStack = createStack();
bookStack.push('marmut merah jambu');
bookStack.push('kambing jantan');

// console.log('size =>', bookStack.size());

const createQueue = () => {
  const queue = [];

  return {
    enqueue: value => queue.unshift(value),
    dequeue: () => queue.pop(),
    peek: () => queue[queue.length - 1],
    size: () => queue.length,
  };
};

const list = createQueue();
list.enqueue('antrian no 1');
list.enqueue('antrian no 2');
list.enqueue('antrian no 3');
list.enqueue('antrian no 4');
list.enqueue('antrian no 5');
list.enqueue('antrian no 6');

list.dequeue();

const createNode = value => {
  return {
    value,
    next: null,
  };
};

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
    push: function (value) {
      const node = createNode(value);

      // jika linkedlist kosong
      if (this.head === null) {
        this.head = node;
        this.tail = node;
        this.length += 1;

        return node;
      }

      // kalau linkedlist gak kosong
      this.tail.next = node;
      this.tail = node;
      this.length += 1;
      return node;
    },
    isEmpty: function () {
      return this.length === 0;
    },
    pop: function () {
      // kalau kosong
      if (this.isEmpty()) {
        return null;
      }

      const node = this.tail;
      // kalau linkedlistnya cuman 1 item
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        return node;
      }

      // kalau item linkedlistnya lebih dari 1
      let current = this.head;
      let penult;

      while (current) {
        // kalau posisi itemnya sebelum terakhir
        if (current.next === this.tail) {
          penult = current;
          break;
        }
        current = current.next;
      }
      penult.next = null;
      this.tail = penult;
      this.length -= 1;

      return node;
    },
    get: function (index) {
      // kalau kosong
      if (index < 0 || index === this.length) return null;
      // kalau item cuman 1
      if (index === 0) return this.head;
      // list item lebih dari 1
      let current = this.head;
      let i = 0;
      while (i < index) {
        current = current.next;
        i += 1;
      }

      return current;
    },
    delete: function () {
      if (index < 0 || index === this.length) return null;
      if (index === 0) {
        const deleted = this.head;
        this.head = this.head.next;
        this.length -= 1;

        return deleted;
      }

      let current = this.head;
      let prev;
      let i = 0;

      while (i < index) {
        prev = current;

        current = current.next;
        i += 1;
      }

      const deleted = current;
      prev.next = current.next;
      this.length -= 1;
      return deleted;
    },
    print: function () {
      const values = [];
      let current = this.head;

      while (current) {
        values.push(current.value);
        current = current.next;
      }

      return values.join(' => ');
    },
  };
}

const listLinked = createLinkedList();
const values = ['a', 'b', 'c', 'd'];
const node = values.map(value => listLinked.push(value));

console.log(listLinked.isEmpty());
console.log(listLinked.print());
console.log(listLinked.get(1));
