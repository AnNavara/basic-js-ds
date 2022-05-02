const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(node, element) {
    // let ogPointer = node;
    let head = {};
    let length = 0;
    // 3, 1, 2, 3 remove 3
    // node.value = 3; head: {}; current: head{};
    // => node.value === remove
    // => node.value === 1; head: {}; current: head{};
    // => node.value !== remove
    // => node.value === 2; head: {value: 1, next: null}; current: head{}
    // => node.value !== remove
    // => node.value === 3; head: {value: 1, next: { value: 2, next: null}}; current: { value: 2, next: null}
    // => node.value === remove
    // => !node; head: {value: 1, next: {value:2, next: null}}; current: {value: 2, next: null}
    // Проход по полученным нодам
    // Если  условие выполняется, то
    //      Сделать голову нового linked list
    //      добавить новый элемент в конец списка

    while (node) {
        if (node.value !== element) {
            if (length === 0) {
                head.value = node.value;
                length++;
            } else {
                let current = head;

                while (current.next) {
                    current = current.next;
                }
                current.next = {};
                current.next.value = node.value;
                current.next.next = null;

                length++;
            }
        }

        node = node.next;
    }

    // let pointer = head;
    // let given = [];
    // let result = [];

    // while (ogPointer) {
    //     given.push(ogPointer.value);
    //     ogPointer = ogPointer.next;
    // }

    // while (pointer) {
    //     result.push(pointer.value);
    //     pointer = pointer.next;
    // }
    // console.log('given list', 'Remove', element);
    // console.log(given);
    // console.log('returned list');
    // console.log(result);
    return head;
}

module.exports = {
    removeKFromList,
};
