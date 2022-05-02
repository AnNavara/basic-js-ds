const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.head = null;
    }

    root() {
        return this.head;
    }

    add(data) {
        const addWithin = (node, data) => {
            if (!node) {
                return new Node(data);
            }

            if (node.data === data) {
                return node;
            }

            if (data < node.data) {
                node.left = addWithin(node.left, data);
            } else {
                node.right = addWithin(node.right, data);
            }

            return node;
        };

        this.head = addWithin(this.head, data);
    }

    has(data) {
        const searchWithin = (node, data) => {
            if (!node) {
                return false;
            }

            if (node.data === data) {
                return true;
            }

            return data < node.data
                ? searchWithin(node.left, data)
                : searchWithin(node.right, data);
        };

        return searchWithin(this.head, data);
    }

    find(data) {
        const searchWithin = (node, data) => {
            if (!node) {
                return null;
            }

            if (node.data === data) {
                return node;
            }

            return data < node.data
                ? searchWithin(node.left, data)
                : searchWithin(node.right, data);
        };

        return searchWithin(this.head, data);
    }

    remove(data) {
        const removeNode = (node, data) => {
            // if node wasn't found return null
            if (!node) {
                return null;
            }

            if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else if (node.data < data) {
                node.right = removeNode(node.right, data);
                return node;
            } else {
                // equal - should remove this item
                if (!node.left && !node.right) {
                    // put null instead of item
                    return null;
                }

                if (!node.left) {
                    // set right child instead of item
                    node = node.right;
                    return node;
                }

                if (!node.right) {
                    // set left child instead of item
                    node = node.left;
                    return node;
                }

                // both children exists for this item
                let minFromRight = node.right;
                while (minFromRight.left) {
                    minFromRight = minFromRight.left;
                }
                node.data = minFromRight.data;

                node.right = removeNode(node.right, minFromRight.data);

                return node;
            }
        };

        this.head = removeNode(this.head, data);
    }

    min() {
        if (!this.head) {
            return;
        }

        let node = this.head;
        while (node.left) {
            node = node.left;
        }

        return node.data;
    }

    max() {
        if (!this.head) {
            return;
        }

        let node = this.head;
        while (node.right) {
            node = node.right;
        }

        return node.data;
    }
}

// const bst = new BinarySearchTree();
// console.log(bst.root());
// bst.add(2);
// bst.add(3);
// bst.add(4);
// console.log(bst.root());
// console.log(bst.min());
// console.log(bst.max());
// console.log(bst.find(4));
// console.log(bst.remove(4));
// console.log(bst.has(5));
// console.log(bst.add(5));
// console.log(bst.find(5));

module.exports = {
    BinarySearchTree,
};
