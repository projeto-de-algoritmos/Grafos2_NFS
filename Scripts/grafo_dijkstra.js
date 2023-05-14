function dijkstra(graph, startNode, endNode) {
    const distances = {};
    const previous = {};
    const visited = new Set();
  
    // Inicialização
    for (let node in graph) {
      distances[node] = Infinity;
      previous[node] = null;
    }
    distances[startNode] = 0;
  
    while (!visited.has(endNode)) {
      let currentNode = null;
      let minDistance = Infinity;
  
      // Encontra o nó não visitado com menor distância
      for (let node in graph) {
        if (!visited.has(node) && distances[node] < minDistance) {
          minDistance = distances[node];
          currentNode = node;
        }
      }
  
      if (currentNode === null) {
        // Não há mais nós alcançáveis a partir do nó de partida
        break;
      }
  
      visited.add(currentNode);
  
      // Atualiza as distâncias para os nós vizinhos
      for (let neighbor of graph[currentNode]) {
        let nextNode = neighbor.vertex;
        let weight = neighbor.weight;
  
        let distance = distances[currentNode] + weight;
  
        if (distance < distances[nextNode]) {
          distances[nextNode] = distance;
          previous[nextNode] = currentNode;
        }
      }
    }
  
    // Constrói o caminho mais curto
    const shortestPath = [];
    let currentNode = endNode;
  
    while (currentNode !== null) {
      shortestPath.unshift(currentNode);
      currentNode = previous[currentNode];
    }
  
    return {
      distance: distances[endNode],
      path: shortestPath,
    };
  }

const grafo = {
    1: [{ vertex: 2, weight: 50 }, { vertex: 69, weight: 50 }],
    2: [{ vertex: 1, weight: 50 }, { vertex: 3, weight: 500 }, { vertex: 69, weight: 100 }],
    3: [{ vertex: 2, weight: 500 }, { vertex: 4, weight: 100 }],
    4: [{ vertex: 3, weight: 100 }, { vertex: 5, weight: 100 }],
    5: [{ vertex: 4, weight: 100 }, { vertex: 6, weight: 50 }],
    6: [{ vertex: 5, weight: 50 }, { vertex: 7, weight: 70 }],
    7: [{ vertex: 6, weight: 70 }, { vertex: 8, weight: 25 }],
    8: [{ vertex: 7, weight: 25 }, { vertex: 9, weight: 70 }],
    9: [{ vertex: 8, weight: 70 }, { vertex: 10, weight: 100 }],
    10: [{ vertex: 9, weight: 100 }, { vertex: 11, weight: 25 }],
    11: [{ vertex: 10, weight: 25 }, { vertex: 12, weight: 25 }],
    12: [{ vertex: 11, weight: 25 }, { vertex: 13, weight: 100 }],
    13: [{ vertex: 12, weight: 100 }, { vertex: 14, weight: 25 }],
    14: [{ vertex: 13, weight: 25 }, { vertex: 15, weight: 300 }],
    15: [{ vertex: 14, weight: 300 }, { vertex: 16, weight: 100 }],
    16: [{ vertex: 15, weight: 100 }, { vertex: 17, weight: 50 }],
    17: [{ vertex: 16, weight: 50 }, { vertex: 18, weight: 200 }],
    18: [{ vertex: 17, weight: 200 }, { vertex: 19, weight: 100 }, { vertex: 70, weight: 200 }],
    19: [{ vertex: 18, weight: 100 }, { vertex: 20, weight: 100 }],
    20: [{ vertex: 19, weight: 100 }, { vertex: 21, weight: 100 }],
    21: [{ vertex: 20, weight: 100 }, { vertex: 22, weight: 100 }],
    22: [{ vertex: 21, weight: 100 }, { vertex: 23, weight: 100 }],
    23: [{ vertex: 22, weight: 100 }, { vertex: 24, weight: 50 }],
    24: [{ vertex: 23, weight: 50 }, { vertex: 25, weight: 10 }],
    25: [{ vertex: 24, weight: 10 }, { vertex: 26, weight: 100 }],
    26: [{ vertex: 25, weight: 100 }, { vertex: 27, weight: 25 }],
    27: [{ vertex: 26, weight: 25 }, { vertex: 28, weight: 20 }],
    28: [{ vertex: 27, weight: 20 }, { vertex: 29, weight: 20 }],
    29: [{ vertex: 28, weight: 20 }, { vertex: 30, weight: 20 }],
    30: [{ vertex: 29, weight: 20 }, { vertex: 31, weight: 100 }],
    31: [{ vertex: 30, weight: 100 }, { vertex: 32, weight: 50 }],
    32: [{ vertex: 31, weight: 50 }, { vertex: 33, weight: 50 }],
    33: [{ vertex: 32, weight: 50 }, { vertex: 34, weight: 50 }],
    34: [{ vertex: 33, weight: 50 }, { vertex: 35, weight: 10 }],
    35: [{ vertex: 34, weight: 10 }, { vertex: 36, weight: 10 }],
    36: [{ vertex: 35, weight: 10 }, { vertex: 37, weight: 50 }],
    37: [{ vertex: 36, weight: 50 }, { vertex: 38, weight: 25 }],
    38: [{ vertex: 37, weight: 25 }, { vertex: 39, weight: 100 }],
    39: [{ vertex: 38, weight: 100 }, { vertex: 40, weight: 100 }, { vertex: 84, weight: 50 }],
    40: [{ vertex: 39, weight: 100 }, { vertex: 41, weight: 10 }, { vertex: 42, weight: 100 }],
    41: [{ vertex: 40, weight: 10 }, { vertex: 43, weight: 100 }],
    42: [{ vertex: 40, weight: 100 }, { vertex: 43, weight: 50 }],
    43: [{ vertex: 42, weight: 50 }, { vertex: 44, weight: 50 }],
    44: [{ vertex: 43, weight: 50 }, { vertex: 45, weight: 10 }],
    45: [{ vertex: 44, weight: 10 }, { vertex: 46, weight: 50 }],
    46: [{ vertex: 45, weight: 50 }, { vertex: 47, weight: 50 }],
    47: [{ vertex: 46, weight: 50 }, { vertex: 48, weight: 50 }],
    48: [{ vertex: 47, weight: 50 }, { vertex: 49, weight: 10 }],
    49: [{ vertex: 48, weight: 10 }, { vertex: 50, weight: 200 }],
    50: [{ vertex: 49, weight: 200 }, { vertex: 51, weight: 50 }, { vertex: 52, weight: 50 }],
    51: [{ vertex: 50, weight: 50 }, { vertex: 52, weight: 50 }],
    52: [{ vertex: 51, weight: 50 }, { vertex: 53, weight: 70 }],
    53: [{ vertex: 52, weight: 70 }, { vertex: 54, weight: 70 }],
    54: [{ vertex: 53, weight: 70 }, { vertex: 55, weight: 20 }],
    55: [{ vertex: 54, weight: 20 }, { vertex: 56, weight: 100 }],
    56: [{ vertex: 55, weight: 100 }, { vertex: 57, weight: 200 }, { vertex: 82, weight: 100 }],
    57: [{ vertex: 56, weight: 200 }, { vertex: 58, weight: 100 }],
    58: [{ vertex: 57, weight: 100 }, { vertex: 59, weight: 100 }],
    59: [{ vertex: 58, weight: 100 }, { vertex: 60, weight: 50 }],
    60: [{ vertex: 59, weight: 50 }, { vertex: 61, weight: 100 }],
    61: [{ vertex: 60, weight: 100 }, { vertex: 62, weight: 50 }],
    62: [{ vertex: 61, weight: 50 }, { vertex: 63, weight: 50 }],
    63: [{ vertex: 62, weight: 50 }, { vertex: 64, weight: 100 }],
    64: [{ vertex: 63, weight: 100 }, { vertex: 65, weight: 200 }],
    65: [{ vertex: 64, weight: 200 }, { vertex: 66, weight: 50 }],
    66: [{ vertex: 65, weight: 50 }, { vertex: 67, weight: 25 }],
    67: [{ vertex: 66, weight: 25 }, { vertex: 68, weight: 25 }, { vertex: 69, weight: 500 }],
    68: [{ vertex: 67, weight: 25 }],
    69: [{ vertex: 1, weight: 50 }, { vertex: 2, weight: 100 }, { vertex: 67, weight: 500 }],
    70: [{ vertex: 18, weight: 200 }, { vertex: 71, weight: 50 }],
    71: [{ vertex: 70, weight: 50 }, { vertex: 72, weight: 100 }],
    72: [{ vertex: 71, weight: 100 }, { vertex: 73, weight: 200 }],
    73: [{ vertex: 72, weight: 200 }, { vertex: 74, weight: 100 }],
    74: [{ vertex: 73, weight: 100 }, { vertex: 75, weight: 50 }],
    75: [{ vertex: 74, weight: 50 }, { vertex: 76, weight: 200 }],
    76: [{ vertex: 75, weight: 200 }, { vertex: 77, weight: 25 }],
    77: [{ vertex: 76, weight: 25 }, { vertex: 78, weight: 50 }],
    78: [{ vertex: 77, weight: 50 }, { vertex: 79, weight: 50 }],
    79: [{ vertex: 78, weight: 50 }, { vertex: 80, weight: 50 }],
    80: [{ vertex: 79, weight: 50 }, { vertex: 81, weight: 100 }],
    81: [{ vertex: 80, weight: 100 }, { vertex: 82, weight: 10 }],
    82: [{ vertex: 81, weight: 10 }, { vertex: 83, weight: 100 }],
    83: [{ vertex: 82, weight: 100 }, { vertex: 84, weight: 100 }],
    84: [{ vertex: 39, weight: 50 }, { vertex: 83, weight: 100 }]
  };
  

const startNode = '4'; // Nó de origem
const endNode = '39'; // Nó de destino

const resultado = dijkstra(grafo, startNode, endNode);

console.log('Distância: ' + resultado.distance + ' metros');
console.log('Caminho mais curto:', resultado.path);
  