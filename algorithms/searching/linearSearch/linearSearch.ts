//* Linear search

// this is the simplest search algorithm
//* this algorithm goes from the start of the list to the end to find the required element.

//* Iterate from 0 to n-1 and compare the value and compare the value of every index with x, if they match return the index.

/**
 *
 * @param array - the input array to the element in.
 * @param x - the element to search for
 * @param n - the length of the array
 */

export default function linearSearch(array: number[], x: number, n: number): number {
	for (let i = 0; i < n; i++) {
		if (array[i] === x) {
			return i;
		}
	}
	return -1;
}

/**
 *
 * @param array array of input elements, (sorted or unsorted)
 * @param n the length of the array - 1, the last index length
 * @param key the element to find in the array
 */

export function recursiveLinearSearch(array: number[], n: number, key: number) {
	if (n < 0) {
		//  base case
		return -1;
	}
	if (array[n] === key) {
		return n;
	}
	return recursiveLinearSearch(array, n - 1, key);
}
