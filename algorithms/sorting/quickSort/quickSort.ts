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

export function quickSortLastELementPivot(
  arr: number[],
  low: number,
  high: number
) {
  if (low < high) {
    let pivot = partition(arr, low, high);
    quickSortLastELementPivot(arr, low, pivot - 1);
    quickSortLastELementPivot(arr, pivot + 1, high);
  }
  return arr;
}

function partition(arr: number[], low: number, high: number): number {
  let i = low - 1;
  let pivot = arr[high];
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}

function swap(arr: number[], first: number, second: number) {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}
