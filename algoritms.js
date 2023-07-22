// eslint-disable-next-line consistent-return

// function binarySearch(list, item) {
//   let low = 0;
//   let high = list.length - 1;
//
//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     if (mid === item) return item;
//     if (mid > item) {
//       high = mid - 1;
//     }
//     if (mid < item) {
//       low = mid + 1;
//     }
//   }
//
//   return null;
// }

function binarySearch(list, item) {
  let high = list.length - 1;
  let low = 0

  while(low <= high) {
    const mid = Math.floor((high + low) / 2);

    if(list[mid] === item) return mid;

    if(list[mid] > item)  high = mid -1;
    if(list[mid] < item) low = mid + 1;
  }
  return null
}

const testArr = Array.from({ length: 100 }, (x, i) => i);
const testSecondArr = [2, 45, 14, 24, 45, 66, 443, 34];

console.log(binarySearch(testArr, 2));

const findSmallest = (arr) => {
  let small = arr[0];
  let smallIndex = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < small) {
      small = arr[i];
      smallIndex = i;
    }
  }

  return smallIndex;
};

const selectionSort = (arr) => {
  const newArray = [];
  const { length } = arr;

  for (let i = 0; i < length; i += 1) {
    const smallestIndex = findSmallest(arr);
    newArray.push(...arr.splice(smallestIndex, 1));
  }
  return newArray;
};

console.log(selectionSort(testSecondArr));

const sum = (arr) => {
  const result = 0;
  if (arr.length === 0) return 0;
  return arr[0] + sum(arr.slice(1));
};

console.log(sum([1, 2, 3, 4, 5]));

const checkCount = (arr) => {
  if (arr.length === 0) return 0;

  return 1 + checkCount(arr.slice(1));
};

console.log(checkCount([1, 2, 3, 4, 5]));

const list = {
  value: 1,
  next: {
    value: 6,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function findTheMax(list) {
  if (!list.next) return list.value;
  let max = list.value;

  max = findTheMax(list.next) > max ? findTheMax(list.next) : max;
  return max;
}

console.log(findTheMax(list));

const quickSort = (arr) => {
  if (arr.length < 2) return arr;

  const current = arr[0];

  const less = arr.slice(1).filter((item) => item < current);
  const greater = arr.slice(1).filter((item) => item > current);

  return [...quickSort(less), current, ...quickSort(greater)];
};

console.log(quickSort(testSecondArr));

// ------------ graph
const graph = {};
graph.you = ['alice', 'bob', 'claire'];
graph.bob = ['anuj', 'peggy'];
graph.alice = ['peggy'];
graph.claire = ['thom', 'jonny'];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];
// ------------ graph

const personIsSeller = (name) => name[-1] === 'm';

const search = (name) => {
  let searchQueue = [];
  searchQueue = searchQueue.concat(graph[name]);
  // This array is how you keep track of which people you've searched before.
  const searched = [];
  while (searchQueue.length) {
    const person = searchQueue.shift();
    // Only search this person if you haven't already searched them
    if (searched.indexOf(person) === -1) {
      if (personIsSeller(person)) {
        console.log(`${person} is a mango seller!`);
        return true;
      }
      searchQueue = searchQueue.concat(graph[person]);
      // Marks this person as searched
      searched.push(person);
    }
  }
  return false;
};

search('thom'); // thom is a mango seller!

const processed = [];

const graphCost = {};

graphCost.start = {};
graphCost.start.a = 5;
graphCost.start.b = 2;

graphCost.a = {};
graphCost.a.c = 4;
graphCost.a.d = 2;

graphCost.b = {};
graphCost.b.a = 8;
graphCost.b.d = 7;

graphCost.c = {};
graphCost.c.d = 6;
graphCost.c.fin = 3;

graphCost.d = {};
graphCost.d.fin = 1;

graphCost.fin = null;

const costs = {};
costs.a = 6;
costs.b = 2;
costs.fin = Infinity;

const parents = {};
parents.a = 'start';
parents.b = 'start';
parents.fin = null;

const findLowestCost = (costs) => {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  for (const node in costs) {
    const currentCost = costs[node];

    if (currentCost < lowestCost && processed.indexOf(node) === -1) {
      lowestCost = currentCost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
};

let lowestNode = findLowestCost(costs);

while(lowestNode !== null) {
  const currentCost = costs[lowestNode];
  const neighbours = graphCost[lowestNode];

  for(const node in neighbours) {
    const cost = currentCost + neighbours[node];

    if(cost < costs[node]) {
      costs[node] = costs;
      parents[node] = node;
    }

  }
  processed.push(lowestNode);
  lowestNode = findLowestCost(costs);
}

console.log('Cost from the start to each node:');
console.log(costs); // { a: 5, b: 2, fin: 6 }
