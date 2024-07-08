import { quickSortFirstElementPivot } from "./quickSortFirstElementPivot";

describe("test merge sort", () => {
  it("tests the sort", () => {
    let x = quickSortFirstElementPivot([2, 3, 4, 1, 4], 0, 5);
    expect(x).toStrictEqual([1, 2, 3, 4, 4]);
  });

  it("tests single case", () => {
    let x = quickSortFirstElementPivot([1], 0, 1);
    expect(x.length).toBe(1);
    expect(x).toStrictEqual([1]);
  });
});
