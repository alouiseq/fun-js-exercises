class Node{
  constructor(value, priority){
      this.val = value;
      this.priority = priority;
  }
}

// Priority Queue represented by a binary heap (min binary heap)
class PriorityQueue{
  constructor(){
      this.values = [];
  }

  enqueue(val, priority){
      const newNode = new Node(val, priority);
      this.values.push(newNode)
      let idx = this.values.length-1

      while(true){
          let parentIdx = Math.floor((idx-1)/2)            
          if(
              parentIdx < 0
              || newNode.priority >= this.values[parentIdx].priority
          ) return this

          this.values[idx] = this.values[parentIdx]
          this.values[parentIdx] = newNode
          idx = parentIdx
      }
  }

  dequeue(){
    
      let len = this.values.length;
      if(!len) return undefined;
      [this.values[0], this.values[len-1]] = [this.values[len-1], this.values[0]];
      const oldRoot = this.values.pop();
      len = this.values.length;
      if(!len) return oldRoot;

      let idx = 0;
      let node = this.values[0];

      while(true){
          let leftChildIdx = Math.floor(2*idx+1);
          let rightChildIdx = Math.floor(2*idx+2);
          let higherPriorityChildIdx = null;
          let leftChildNode, rightChildNode, higherPriorityChildNode;
   
          if(leftChildIdx < len) leftChildNode = this.values[leftChildIdx];
          else return oldRoot;

          if(rightChildIdx < len) rightChildNode = this.values[rightChildIdx];

          if(leftChildNode && rightChildNode){
              higherPriorityChildIdx =
                  leftChildNode.priority <= rightChildNode.priority
                      ? leftChildIdx
                      : rightChildIdx;
              higherPriorityChildNode = this.values[higherPriorityChildIdx];
          }

          if(leftChildNode.priority < node.priority){
              higherPriorityChildIdx = leftChildIdx;
          }
          if(
              rightChildNode
              && rightChildNode.priority < node.priority
              && rightChildNode.priority < leftChildNode.priority
          ){
              higherPriorityChildIdx = rightChildIdx;
          } 
          if(higherPriorityChildIdx === null) return oldRoot;

          this.values[higherPriorityChildIdx] = node;
          this.values[idx] = higherPriorityChildNode;
          idx = higherPriorityChildIdx;
          node = this.values[idx];
      }
      return oldRoot;
  }
}

const pq = new PriorityQueue()