function bubbleSort(ary) {
  for(i=ary.length-1; i>0; i--) {
      for(let j=0; j<=i-1; j++) {
          console.log(ary, ary[j], ary[j+1])
          if (ary[j] > ary[j+1]) {
              let tmp = ary[j]
              ary[j] = ary[j+1]
              ary[j+1] = tmp
          }
      }
      console.log('ONE PASS COMPLETE')
  }
  return ary
}

bubbleSort([3, 25, 1, 56, 22])