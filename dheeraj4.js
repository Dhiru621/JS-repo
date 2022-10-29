<script>
// javascript program to delete a given node
// in linked list under given constraints
var head;

	class Node
	{
			constructor(val)
			{
				this.data = val;
				this.next = null;
			}
		}

	function deleteNode( node, n)
	{

		// When node to be deleted is head node
		if (node == n)
		{
			if (node.next == null)
			{
				document.write("There is only one node. The list " + "can't be made empty ");
				return;
			}

			/* Copy the data of next node to head */
			node.data = node.next.data;

			// store address of next node
			n = node.next;

			// Remove the link of next node
			node.next = node.next.next;

			// free memory
		

			return;
		}

		// When not first node, follow the normal deletion process
		// find the previous node
		prev = node;
		while (prev.next != null && prev.next != n)
		{
			prev = prev.next;
		}

		// Check if node really exists in Linked List
		if (prev.next == null)
		{
			document.write("Given node is not present in Linked List");
			return;
		}

		// Remove node from Linked List
		prev.next = prev.next.next;
		return;
	}

	/* Utility function to print a linked list */
	function printList( head)
	{
		while (head != null)
		{
			document.write(head.data + " ");
			head = head.next;
		}
		document.write("");
	}
	
		head = new Node(12);
		head.next = new Node(15);
		head.next.next = new Node(10);
		head.next.next.next = new Node(11);
		head.next.next.next.next = new Node(5);
		head.next.next.next.next.next = new Node(6);
		head.next.next.next.next.next.next = new Node(2);
		head.next.next.next.next.next.next.next = new Node(3);

		document.write("Given Linked List :");
		printList(head);
		document.write("");

		// Let us delete the node with value 10
		document.write("<br/>Deleting node :" + head.next.next.data);
		deleteNode(head, head.next.next);

		document.write("<br/>Modified Linked list :");
		printList(head);
		document.write("<br/>");

		// Lets delete the first node
		document.write("Deleting first Node<br/>");
		deleteNode(head, head);
		document.write("Modified Linked List");
		printList(head);


</script>
