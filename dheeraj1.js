<script>
// javascript Code to find the last man Standing


	// Node class to store data
class Node {
	constructor(val) {
		this.data = val;
		this.next = null;
	}
}

	/*
	* Function to find the only person left after one in every m-th node is killed
	* in a circle of n nodes
	*/
	function getJosephusPosition(m , n) {
		// Create a circular linked list of
		// size N.
var head = new Node(1);
var prev = head;
		for (i = 2; i <= n; i++) {
			prev.next = new Node(i);
			prev = prev.next;
		}

		// Connect last node to first
		prev.next = head;

		/*
		* while only one node is left in the linked list
		*/
var ptr1 = head, ptr2 = head;

		while (ptr1.next != ptr1) {

			// Find m-th node
			var count = 1;
			while (count != m) {
				ptr2 = ptr1;
				ptr1 = ptr1.next;
				count++;
			}

			/* Remove the m-th node */
			ptr2.next = ptr1.next;
			ptr1 = ptr2.next;
		}
		document.write("Last person left standing " + "(Josephus Position) is " + ptr1.data);
	}

	/* Driver program to test above functions */
	
		var n = 14, m = 2;
		getJosephusPosition(m, n);

</script>
