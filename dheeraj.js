<script>
// javascript program to count number of nodes in a linked list

/* Linked list Node*/
class Node {
	constructor(val) {
		this.data = val;
		this.next = null;
	}
}

// Linked List class
var head; // head of list

	/* Inserts a new Node at front of the list. */
	function push(new_data) {
		/*
		* 1 & 2: Allocate the Node & Put in the data
		*/
		var new_node = new Node(new_data);

		/* 3. Make next of new Node as head */
		new_node.next = head;

		/* 4. Move the head to point to new Node */
		head = new_node;
	}

	/* Returns count of nodes in linked list */
	function getCount() {
		var temp = head;
		var count = 0;
		while (temp != null) {
			count++;
			temp = temp.next;
		}
		return count;
	}

	
	
		/* Start with the empty list */
		push(1);
		push(3);
		push(1);
		push(2);
		push(1);

		document.write("Count of nodes is " + getCount());


</script>
