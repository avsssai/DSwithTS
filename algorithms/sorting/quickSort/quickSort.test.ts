import { quickSort } from "./quickSort";

describe("test merge sort", () => {
  it("tests the sort", () => {
    let x = quickSort([2, 3, 4, 1, 4]);
    expect(x).toStrictEqual([1, 2, 3, 4, 4]);
  });

  it("tests single case", () => {
    let x = quickSort([1]);
    expect(x.length).toBe(1);
    expect(x).toStrictEqual([1]);
  });
});
