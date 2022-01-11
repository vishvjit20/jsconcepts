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

  bfsTraversal(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currVtx;
    visited[start] = true;

    while (queue.length > 0) {
      currVtx = queue.shift();
      result.push(currVtx);
      this.adjacencyList[currVtx].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
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
console.log(g.bfsTraversal("A"));
console.log(g.adjacencyList);
