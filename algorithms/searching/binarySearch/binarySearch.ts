// recursive binary search

//* Binary search is performed on a sorted data structure to search for the required data

/**
 *
 * @param array array of sorted elements
 * @param target the target element to search for
 * @param left the starting index of the search - represents position on the array, not the value of the element
 * @param right the ending index of the search - represents the position on the array, not the value of the element.
 * @returns true if the element is found, false otherwise.
 */

export function recursiveBinarySearch(array: number[], target: number, left: number, right: number): boolean {
	//! Error: this means the data is not sorted.
	if (left > right) {
		return false;
	}
	let mid = Math.floor((left + right) / 2);
	if (target === array[mid]) {
		return true;
	} else if (target < array[mid]) {
		return recursiveBinarySearch(array, target, left, mid - 1);
	} else {
		return recursiveBinarySearch(array, target, mid + 1, right);
	}
}

/**
 *
 * @param array array of sorted elements
 * @param target target element to find in the input array
 */
export function iterativeBinarySearch(array: number[], target: number): boolean {
	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (array[mid] === target) {
			return true;
		} else if (target < array[mid]) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	return false;
}
