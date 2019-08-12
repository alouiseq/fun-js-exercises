function insertionSort(ary) {
  for(let i=1; i<ary.length; i++) {
    const currVal = ary[i]
    let j = i-1
    while(j>=0 && currVal<ary[j]) {
        ary[j+1] = ary[j]
        finalIndex = ary[j]
        console.log(ary, j)
        j--
    }
    ary[j+1] = currVal
    
  }
  return ary
}

insertionSort([3, 25, 4, 1, 56, 56, 100, 22, 2])
