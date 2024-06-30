export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftHalf = arr.slice(0, mid);
  let rightHalf = arr.slice(mid, arr.length);
  let leftSorted = mergeSort(leftHalf);
  let rightSorted = mergeSort(rightHalf);
  return merge(leftSorted, rightSorted);
}

function merge(arr1: number[], arr2: number[]): number[] {
  let pointer1 = 0,
    pointer2 = 0;
  let res: number[] = [];
  while (pointer1 < arr1.length || pointer2 < arr2.length) {
    if (arr1[pointer1] <= arr2[pointer2]) {
      res.push(arr1[pointer1]);
      pointer1++;
    } else {
      res.push(arr2[pointer2]);
      pointer2++;
    }
  }
  for (let i = pointer1; i < arr1.length; i++) res.push(arr1[pointer1]);
  for (let j = pointer2; j < arr2.length; j++) res.push(arr2[pointer1]);
  return res;
}
