import { mergeSort } from "./mergeSort";

describe("test merge sort", () => {
  it("tests the sort", () => {
    let x = mergeSort([2, 3, 4, 1, 4]);
    expect(x).toStrictEqual([1, 2, 3, 4, 4]);
  });

  it("tests single case", () => {
    let x = mergeSort([1]);
    expect(x.length).toBe(1);
    expect(x).toStrictEqual([1]);
  });
});
