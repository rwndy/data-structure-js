function createNode(key) {
  const friends = [];
  return {
    key,
    friends,
    addFriend: node => friends.push(node),
  };
}

function createGraph(directed = false) {
  const nodes = [];
  const edges = [];
  return {
    directed,
    nodes,
    edges,
    addNode: key => {
      const newNode = createNode(key);
      nodes.push(newNode);
    },
  };
}
