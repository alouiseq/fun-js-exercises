class Node {
  constructor(val){
      this.value = val
      this.left = null
      this.right = null
  }
}

class BST {
  constructor(){
      this.root = null
  }

  insert(val){
      // check if no root
      const newNode = new Node(val)
      if(!this.root){
          this.root = newNode
          return this
      }
      
      // if root, check if val is less than or greater than current node
      // and traverse either the left or right child
      let current = this.root
      while(true){
          if(val === current.value) return undefined
          if(val < current.value){
              if(!current.left) {
                  current.left = newNode
                  return this
              }
              current = current.left
          } else {
              if(!current.right){
                  current.right = newNode
                  return this
              }
              current = current.right
          }
      }
  }

  find(val){
      if(!this.root) return false
      let current = this.root

      while(current){
          if(val < current.value){
              current = current.left
          }else if(val > current.value){
              current = current.right
          }
          if(current && val === current.value) return current
      }
      return false
  }

  bfs(){
      const queue = []
      const data = []
      let node = this.root

      queue.push(node)
      while(queue.length){
           node = queue.shift()
           data.push(node.value)            
           if(node.left) queue.push(node.left)
           if(node.right) queue.push(node.right)             
      }
      return data
  }

  preOrder(data, curr){
      data.push(curr.value)
      if(curr.left) this.preOrder(data, curr.left)
      if(curr.right) this.preOrder(data, curr.right)
      return data
  }

  postOrder(data, curr){
      if(curr.left) this.postOrder(data, curr.left)
      if(curr.right) this.postOrder(data, curr.right)
      data.push(curr.value)
      return data
  }

  inOrder(data, curr){
      if(curr.left) this.inOrder(data, curr.left)
      data.push(curr.value)
      if(curr.right) this.inOrder(data, curr.right)
      return data
  }

  dfs(type){
      if(!this.root) return false
      const data = []
      let curr = this.root

      switch(type){
          case 'preorder':
              return this.preOrder(data, curr)
          case 'postorder':
              return this.postOrder(data, curr)
          default:    // inorder
              return this.inOrder(data, curr)
      }
  }
}

const tree = new BST()
tree.insert(25)
tree.insert(30)
tree.insert(100)
tree.insert(75)
tree.insert(55)
tree.insert(69)
tree.insert(35)
tree.insert(80)
tree.insert(5)
tree.insert(1)

console.log('Breath first search:', tree.bfs());
console.log('Depth first preorder search:', tree.dfs('preorder'));
console.log('Depth first inorder search:', tree.dfs('inorder'));
console.log('Depth first postorder search:', tree.dfs('postorder'));

module.exports.tree = tree;
module.exports.bst = BST;