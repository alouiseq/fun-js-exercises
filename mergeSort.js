function mergeSort (ary) {
  const merge = (leftArr, rightArr) => {
      let leftPtr = 0
      let rightPtr = 0
      let mergedArr = []

      while(leftPtr < leftArr.length && rightPtr < rightArr.length) {
          if (leftArr[leftPtr] <= rightArr[rightPtr]) {
              mergedArr.push(leftArr[leftPtr++])
          } else {
              mergedArr.push(rightArr[rightPtr++])
          }
      }
      if (leftPtr > rightPtr) {
          return [...mergedArr, ...rightArr.slice(rightPtr)]
      } else {
          return [...mergedArr, ...leftArr.slice(leftPtr)]
      }
  }
  
  if (ary.length <= 1) return ary

  const i = Math.floor(ary.length / 2)
  const left = ary.slice(0, i)
  const right = ary.slice(i)
  return merge(mergeSort(left), mergeSort(right))
}

mergeSort([56, 29, 4, 1, 100, 75, 35, 75, 25, 0])