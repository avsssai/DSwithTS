export function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left: number[] = [];
  let right: number[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let item = arr[i];
    if (item < pivot) {
      left.push(item);
    } else {
      right.push(item);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
