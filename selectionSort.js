function selectionSort(ary) {
  const swap = (ary, one, two) =>
      [ary[one], ary[two]] = [ary[two], ary[one]]

  for(let i=0; i<ary.length-1; i++) {
      let min = i
      console.log(ary)
      for(let j=i+1; j<ary.length; j++) {
          if (ary[min] > ary[j]) {
              min = j
          }
      }
      if (i !== min) {
          console.log(`SWAPPING ${ary[min]} with ${ary[i]}`)
          swap(ary, min, i)
      }   
  }
  return ary
}

selectionSort([3, 25, 4, 1, 56, 56, 100, 22, 2])