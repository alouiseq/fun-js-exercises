function quickSort(ary, left=0, right=ary.length-1) {
  const pivoter = (ary, start, end) => {
      let pivot = start
      for(let i=start+1; i<=end; i++) {
          if (ary[start] > ary[i]) {
              pivot++
              [ary[pivot], ary[i]] = [ary[i], ary[pivot]]
          }
      }
      [ary[start], ary[pivot]] = [ary[pivot], ary[start]]
      return pivot

  }

  if (left < right) {
      const pivot = pivoter(ary, left, right)
  //     console.log(pivot, ary)
      quickSort(ary, left, pivot-1)
      quickSort(ary, pivot+1, right)
  }
  return ary
}

quickSort([9,4,8,2,1,5,7,6,3])