// mergeSort(array){
// if(array.lengh == 1) return array
// arr1 = (0:arr/2)
// arr2 = (arr/2:arr)
//     if (arr1.length or arr2.length != 1 ){
//         arr1 = mergeSort(arr1)
//         arr2 = mergeSort(arr2)
//     }
//     return merge(arr1, arr2)
// }

const merge = (arr1: number[], arr2: number[]) => {
  let i = 0;
  let j = 0;
  let newArray: number[] = [];
  while (arr1[i] != undefined || arr2[j] != undefined) {
    if (arr1[i] > arr2[j] || arr1[i] == undefined) {
      newArray.push(arr2[j]);
      j++;
      continue;
    }
    if (arr1[i] <= arr2[j] || arr2[j] == undefined) {
      newArray.push(arr1[i]);
      i++;
      continue;
    }
  }
  return newArray;
};

const mergeSort = (arr: number[]): number[] => {
  if (arr.length === 1) return arr;
  let halfArr = Math.floor(arr.length / 2);
  let arr1 = arr.splice(0, halfArr);
  let arr2 = arr.splice(0, halfArr + 1);
  if (arr1.length != 1 || arr2.length != 1) {
    arr1 = mergeSort(arr1);
    arr2 = mergeSort(arr2);
  }
  return merge(arr1, arr2);
};

console.log(mergeSort([2, 4, 3, 1, 5, 7, 4, 2, 8, 3, 6, 3, 7, 11, 2, 12, 12]));
