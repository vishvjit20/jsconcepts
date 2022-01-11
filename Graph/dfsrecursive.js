class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(u, v) {
    this.adjacencyList[u].push(v);
    this.adjacencyList[v].push(u);
  }
  removeEdge(u, v) {
    this.adjacencyList[u] = this.adjacencyList[u].filter((val) => val !== v);
    this.adjacencyList[v] = this.adjacencyList[v].filter((val) => val !== u);
  }
  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((val) => {
      this.removeEdge(vertex, val);
    });
    delete this.adjacencyList[vertex];
  }

  dfsRecursiveTraversal(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    })(start);

    return result;
  }

  dfsIterativeTraversal(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVtx;

    visited[start] = true;
    while (stack.length > 0) {
      currentVtx = stack.pop();
      result.push(currentVtx);
      this.adjacencyList[currentVtx].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }
    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.dfsRecursiveTraversal("A"));
console.log(g.dfsIterativeTraversal("A"));
console.log(g.adjacencyList);
