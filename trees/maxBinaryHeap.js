class MaxBinaryHeap{
  constructor(){
      this.values = [55,39,41,18,27,12,33]
  }

  insert(val){
      this.values.push(val)
      if(this.values.length === 1) return this

      let child = this.values.length - 1
      let parent = Math.floor((child-1)/2)
      while(val > this.values[parent] && parent >= 0){
          [this.values[parent], this.values[child]] = [this.values[child], this.values[parent]]
          child = parent
          parent = Math.floor((child-1)/2)
      }
      return this.values
  }

  extractMax(){
      let len = this.values.length
      if(!len) return undefined 
      let lastIdx = len - 1;
      [this.values[0], this.values[lastIdx]] = [this.values[lastIdx], this.values[0]]
      const oldRoot = this.values.pop()
      if(!len) return oldRoot
      len = this.values.length
      let idx = 0
      let elem = this.values[idx]

      while(true){
          let swapIdx = null
          let leftIdx = Math.floor(2*idx+1)
          let rightIdx = Math.floor(2*idx+2)
          let leftElem, rightElem
          if(leftIdx < len) leftElem = this.values[leftIdx]
          else break
          if(rightIdx < len){
              rightElem = this.values[rightIdx]
          }

          if(leftElem > elem){
              swapIdx = leftIdx
          }
          if(rightIdx < len && rightElem > elem && rightElem > leftElem){
              swapIdx = rightIdx
          }
          if(swapIdx === null) break;

          [this.values[idx], this.values[swapIdx]] = [this.values[swapIdx], this.values[idx]]
          idx = swapIdx
      }

      return oldRoot

  }
}

const maxHeap = new MaxBinaryHeap()
// removing root: [55, 39, 41, 18, 27, 12, 33] => [41, 39, 33, 18, 27, 12] => [39, 27, 33, 18, 12]