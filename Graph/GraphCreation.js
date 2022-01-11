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
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("USA");
g.addVertex("Dallas");
g.addVertex("India");
g.addVertex("Hongkong");
g.addEdge("USA", "Dallas");
g.addEdge("Tokyo", "Hongkong");
g.addEdge("USA", "Hongkong");
g.addEdge("Hongkong", "India");
g.addEdge("India", "USA");
g.addEdge("Dallas", "Tokyo");
g.removeVertex("Hongkong");
// g.removeEdge("USA", "Dallas");
console.log(g.adjacencyList);
