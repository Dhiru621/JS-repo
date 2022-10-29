<script>
// A complete working javascript program
// to demonstrate deletion
// in singly linked list

	var head; // head of list

	/* Linked list Node */
	class Node {
		constructor(val) {
			this.data = val;
			this.next = null;
		}
	}

	/*
	* Given a key, deletes the first occurrence of key in linked list
	*/
	function deleteNode(key) {
		// Store head node
		var temp = head, prev = null;

		// If head node itself holds the key to be deleted
		if (temp != null && temp.data == key) {
			head = temp.next; // Changed head
			return;
		}

		// Search for the key to be deleted, keep track of
		// the previous node as we need to change temp.next
		while (temp != null && temp.data != key) {
			prev = temp;
			temp = temp.next;
		}

		// If key was not present in linked list
		if (temp == null)
			return;

		// Unlink the node from linked list
		prev.next = temp.next;
	}

	/* Inserts a new Node at front of the list. */
	function push(new_data) {
		var new_node = new Node(new_data);
		new_node.next = head;
		head = new_node;
	}

	/*
	* This function prints contents of linked list starting from the given node
	*/
	function printList() {
		tnode = head;
		while (tnode != null) {
			document.write(tnode.data + " ");
			tnode = tnode.next;
		}
	}

	/*
	* Driver program to test above functions. Ideally this function should be in a
	* separate user class. It is kept here to keep code compact
	*/
	
		
		push(7);
		push(1);
		push(3);
		push(2);

		document.write("Created Linked list is:<br/>");
		printList();

		deleteNode(1); // Delete node with data 1

		document.write("<br/>Linked List after Deletion of 1:<br/>");
		printList();


</script>
