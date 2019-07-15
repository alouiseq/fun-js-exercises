class Graph{
  constructor(){
      this.adjacencyList = {};
  }

  addVertex(vertex){
      this.adjacencyList[vertex] = [];
      return this;
  }

  addEdges(...vertices){
      for(let i=0; i<vertices.length; i++){
          const vertex = vertices[i]
          if(this.adjacencyList[vertex]){
              let newVertices = [...vertices];
              newVertices.splice(i, 1)
              this.adjacencyList[vertex].push(...newVertices)
          }
      }
      return this
  }

  removeEdges(...vertices){
      for(let i=0; i<vertices.length; i++){
          const vertex = vertices[i]
          let edges = this.adjacencyList[vertex]
          if(edges){
              let newVertices = [...vertices];
              newVertices.splice(i, 1)
              this.adjacencyList[vertex] = edges.filter((v) => !newVertices.includes(v))
          }
      }
      return this
  }

  removeVertex(vertex){
      if(this.adjacencyList[vertex]){
          this.adjacencyList[vertex].forEach((vEdge) => {
              this.removeEdges(vertex, vEdge)
          })
          delete this.adjacencyList[vertex]
          return this
      }
      return undefined
  }

  dfsRecursive(vertex, returnList=[], visited={}){
      const edges = this.adjacencyList[vertex];
      visited[vertex] = true;
      returnList.push(vertex);
      if(!edges) return returnList;

      for(let e of edges){
          if(!visited[e]){
              this.dfsRecursive(e, returnList, visited)
          }
      }
      return returnList;
  }

  dfsIterative(start){
      const stack = [start];
      const visited = {[start]: true};
      const returnList = [];
      let currentNode, edges;

      while(stack.length){
          console.log('STACK', stack);
          currentNode = stack.pop();
          returnList.push(currentNode);

          edges = this.adjacencyList[currentNode];
          edges.forEach((edge) => {
              if(!visited[edge]){
                  stack.push(edge);
                  visited[edge] = true;
              }
          });

      }
      return returnList;
  }

  bfs(start){
      const queue = [start];
      const visited = {[start]: true};
      const returnList = [];
      let currentNode, edges;

      while(queue.length){
          console.log('QUEUE', queue)
          currentNode = queue.shift();
          returnList.push(currentNode);

          edges = this.adjacencyList[currentNode];
          edges.forEach((edge) => {
              if(!visited[edge]){
                  queue.push(edge);
                  visited[edge] = true;
              }
          });
      }
      return returnList;  
  }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdges('A', 'B')
graph.addEdges('A', 'C')
graph.addEdges('B', 'D')
graph.addEdges('C', 'E')
graph.addEdges('D', 'E')
graph.addEdges('D', 'F')
graph.addEdges('E', 'F')

// Answer: ["A", "B", "D", "E", "C", "F"]