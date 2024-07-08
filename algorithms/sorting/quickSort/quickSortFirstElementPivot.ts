export function quickSortFirstElementPivot(
  arr: number[],
  low: number,
  high: number
) {
  if (low < high) {
    let pivot = partition(arr, low, high);
    quickSortFirstElementPivot(arr, low, pivot);
    quickSortFirstElementPivot(arr, pivot + 1, high);
  }
  return arr;
}

function partition(arr: number[], low: number, high: number) {
  let i = low,
    j = high - 1;
  let pivot = arr[low];
  while (i < j) {
    do {
      i++;
    } while (pivot >= arr[i]);

    do {
      j--;
    } while (pivot < arr[j]);
    if (i < j) {
      swap(arr, i, j);
    }
  }
  swap(arr, j, low);
  return j;
}

function swap(arr: number[], first: number, second: number) {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}
