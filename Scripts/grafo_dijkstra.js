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
    1: [{ vertex: 2, weight: 3 }, { vertex: 69, weight: 5 }],
    2: [{ vertex: 1, weight: 1 }, { vertex: 3, weight: 2 }, { vertex: 69, weight: 4 }],
    3: [{ vertex: 2, weight: 2 }, { vertex: 4, weight: 3 }],
    4: [{ vertex: 3, weight: 2 }, { vertex: 5, weight: 4 }],
    5: [{ vertex: 4, weight: 1 }, { vertex: 6, weight: 5 }],
    6: [{ vertex: 5, weight: 3 }, { vertex: 7, weight: 6 }],
    7: [{ vertex: 6, weight: 4 }, { vertex: 8, weight: 2 }],
    8: [{ vertex: 7, weight: 1 }, { vertex: 9, weight: 3 }],
    9: [{ vertex: 8, weight: 4 }, { vertex: 10, weight: 2 }],
    10: [{ vertex: 9, weight: 1 }, { vertex: 11, weight: 4 }],
    11: [{ vertex: 10, weight: 3 }, { vertex: 12, weight: 2 }],
    12: [{ vertex: 11, weight: 1 }, { vertex: 13, weight: 5 }],
    13: [{ vertex: 12, weight: 4 }, { vertex: 14, weight: 3 }],
    14: [{ vertex: 13, weight: 2 }, { vertex: 15, weight: 4 }],
    15: [{ vertex: 14, weight: 3 }, { vertex: 16, weight: 1 }],
    16: [{ vertex: 15, weight: 2 }, { vertex: 17, weight: 6 }],
    17: [{ vertex: 16, weight: 1 }, { vertex: 18, weight: 4 }],
    18: [{ vertex: 17, weight: 3 }, { vertex: 19, weight: 2 }, { vertex: 70, weight: 5 }],
    19: [{ vertex: 18, weight: 4 }, { vertex: 20, weight: 1 }],
    20: [{ vertex: 19, weight: 3 }, { vertex: 21, weight: 2 }],
    21: [{ vertex: 20, weight: 1 }, { vertex: 22, weight: 3 }],
    22: [{ vertex: 21, weight: 2 }, { vertex: 23, weight: 4 }],
    23: [{ vertex: 22, weight: 3 }, { vertex: 24, weight: 1 }],
    24: [{ vertex: 23, weight: 2 }, { vertex: 25, weight: 5 }],
    25: [{ vertex: 24, weight: 1 }, { vertex: 26, weight: 3 }],
    26: [{ vertex: 25, weight: 4 }, { vertex: 27, weight: 2 }],
    27: [{ vertex: 26, weight: 3 }, { vertex: 28, weight: 4 }],
    28: [{ vertex: 27, weight: 1 }, { vertex: 29, weight: 3 }],
    29: [{ vertex: 28, weight: 2 }, { vertex: 30, weight: 4 }],
    30: [{ vertex: 29, weight: 3 }, { vertex: 31, weight: 1 }],
    31: [{ vertex: 30, weight: 2 }, { vertex: 32, weight: 5 }],
    32: [{ vertex: 31, weight: 1 }, { vertex: 33, weight: 3 }],
    33: [{ vertex: 32, weight: 4 }, { vertex: 34, weight: 2 }],
    34: [{ vertex: 33, weight: 3 }, { vertex: 35, weight: 4 }],
    35: [{ vertex: 34, weight: 1 }, { vertex: 36, weight: 2 }],
    36: [{ vertex: 35, weight: 4 }, { vertex: 37, weight: 3 }],
    37: [{ vertex: 36, weight: 2 }, { vertex: 38, weight: 4 }],
    38: [{ vertex: 37, weight: 1 }, { vertex: 39, weight: 3 }],
    39: [{ vertex: 38, weight: 2 }, { vertex: 40, weight: 5 }, { vertex: 84, weight: 4 }],
    40: [{ vertex: 39, weight: 3 }, { vertex: 41, weight: 2 }, { vertex: 42, weight: 1 }],
    41: [{ vertex: 40, weight: 4 }, { vertex: 42, weight: 3 }],
    42: [{ vertex: 41, weight: 2 }, { vertex: 43, weight: 1 }],
    43: [{ vertex: 42, weight: 3 }, { vertex: 44, weight: 4 }],
    44: [{ vertex: 43, weight: 2 }, { vertex: 45, weight: 3 }],
    45: [{ vertex: 44, weight: 1 }, { vertex: 46, weight: 2 }],
    46: [{ vertex: 45, weight: 4 }, { vertex: 47, weight: 3 }],
    47: [{ vertex: 46, weight: 3 }, { vertex: 48, weight: 2 }],
    48: [{ vertex: 47, weight: 2 }, { vertex: 49, weight: 1 }],
    49: [{ vertex: 48, weight: 3 }, { vertex: 50, weight: 4 }],
    50: [{ vertex: 49, weight: 2 }, { vertex: 51, weight: 3 }, { vertex: 52, weight: 5 }],
    51: [{ vertex: 50, weight: 4 }, { vertex: 52, weight: 1 }],
    52: [{ vertex: 51, weight: 3 }, { vertex: 53, weight: 2 }],
    53: [{ vertex: 52, weight: 1 }, { vertex: 54, weight: 4 }],
    54: [{ vertex: 53, weight: 2 }, { vertex: 55, weight: 3 }],
    55: [{ vertex: 54, weight: 1 }, { vertex: 56, weight: 2 }],
    56: [{ vertex: 55, weight: 3 }, { vertex: 57, weight: 4 }, { vertex: 82, weight: 5 }],
    57: [{ vertex: 56, weight: 2 }, { vertex: 58, weight: 3 }],
    58: [{ vertex: 57, weight: 4 }, { vertex: 59, weight: 2 }],
    59: [{ vertex: 58, weight: 1 }, { vertex: 60, weight: 3 }],
    60: [{ vertex: 59, weight: 2 }, { vertex: 61, weight: 4 }],
    61: [{ vertex: 60, weight: 3 }, { vertex: 62, weight: 1 }],
    62: [{ vertex: 61, weight: 2 }, { vertex: 63, weight: 3 }],
    63: [{ vertex: 62, weight: 1 }, { vertex: 64, weight: 4 }],
    64: [{ vertex: 63, weight: 2 }, { vertex: 65, weight: 3 }],
    65: [{ vertex: 64, weight: 4 }, { vertex: 66, weight: 2 }],
    66: [{ vertex: 65, weight: 1 }, { vertex: 67, weight: 3 }],
    67: [{ vertex: 66, weight: 2 }, { vertex: 68, weight: 4 }, { vertex: 69, weight: 5 }],
    68: [{ vertex: 67, weight: 3 }],
    69: [{ vertex: 1, weight: 2 }, { vertex: 2, weight: 3 }, { vertex: 67, weight: 1 }],
    70: [{ vertex: 18, weight: 5 }, { vertex: 71, weight: 3 }],
    71: [{ vertex: 70, weight: 2 }, { vertex: 72, weight: 4 }],
    72: [{ vertex: 71, weight: 1 }, { vertex: 73, weight: 3 }],
    73: [{ vertex: 72, weight: 4 }, { vertex: 74, weight: 2 }],
    74: [{ vertex: 73, weight: 3 }, { vertex: 75, weight: 4 }],
    75: [{ vertex: 74, weight: 1 }, { vertex: 76, weight: 3 }],
    76: [{ vertex: 75, weight: 2 }, { vertex: 77, weight: 4 }],
    77: [{ vertex: 76, weight: 3 }, { vertex: 78, weight: 2 }],
    78: [{ vertex: 77, weight: 2 }, { vertex: 79, weight: 1 }],
    79: [{ vertex: 78, weight: 3 }, { vertex: 80, weight: 4 }],
    80: [{ vertex: 79, weight: 2 }, { vertex: 81, weight: 3 }],
    81: [{ vertex: 80, weight: 4 }, { vertex: 82, weight: 1 }],
    82: [{ vertex: 81, weight: 2 }, { vertex: 83, weight: 4 }],
    83: [{ vertex: 82, weight: 3 }, { vertex: 84, weight: 2 }],
    84: [{ vertex: 39, weight: 4 }, { vertex: 83, weight: 3 }]
  };
  

const startNode = '1'; // Nó de origem
const endNode = '4'; // Nó de destino

const resultado = dijkstra(grafo, startNode, endNode);

console.log('Distância:', resultado.distance);
console.log('Caminho mais curto:', resultado.path);
  