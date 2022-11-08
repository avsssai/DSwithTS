import linearSearch, { recursiveLinearSearch } from "./linearSearch";

describe("testing linear search", () => {
	test("linear search works?", () => {
		let arr = [1, 2, 3, 4, 5, 6, 7];
		let elementToFind = 4;
		expect(linearSearch(arr, elementToFind, arr.length)).toBe(3);
	});
	test("linear search fails?", () => {
		let arr = [1, 2, 3, 4, 5, 6, 7];
		let elementToFind = 8;
		expect(linearSearch(arr, elementToFind, arr.length)).toBe(-1);
	});
});

describe("testing the recursive linear search", () => {
	test("recursive linear search works?", () => {
		let arr = [1, 2, 3, 4, 5, 56];
		let n = arr.length - 1;
		let k = 4;
		expect(recursiveLinearSearch(arr, n, k)).toBe(3);
	});
	test("recursive linear search works for fail scenarios?", () => {
		let arr = [1, 2, 3, 4, 5, 56];
		let n = arr.length - 1;
		let k = 67;
		expect(recursiveLinearSearch(arr, n, k)).toBe(-1);
	});
});
