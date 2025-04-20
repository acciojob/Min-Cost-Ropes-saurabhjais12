function mincost(arr) {
  // Sort the array in ascending order to get the smallest elements first
  arr.sort((a, b) => a - b);  // Sorting the array for easy access to the smallest elements

  let totalCost = 0;

  // While more than one rope exists
  while (arr.length > 1) {
    // Pop the two smallest ropes (first and second)
    const first = arr.shift();
    const second = arr.shift();

    // Calculate the cost of connecting these two ropes
    const cost = first + second;
    totalCost += cost;  // Add the cost to the total

    // Insert the combined rope back into the array and re-sort
    arr.push(cost);
    arr.sort((a, b) => a - b);  // Sort the array after insertion to keep the smallest ropes at the front
  }

  return totalCost;
}

module.exports = mincost;
