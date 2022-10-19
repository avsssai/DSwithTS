import { iterativeBinarySearch, recursiveBinarySearch } from "./binarySearch";

describe("Binary search test", () => {
	it("test recursive binary search", () => {
		expect(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7], 7, 0, 6)).toBe(true);
	});

	it("test the iterative binary search", () => {
		expect(iterativeBinarySearch([1, 34, 56, 78, 455, 675, 3445], 3445)).toBe(true);
	});
});
