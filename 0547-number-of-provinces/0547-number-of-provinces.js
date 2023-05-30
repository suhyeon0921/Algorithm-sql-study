var findCircleNum = function(isConnected) {
    const visit = (currentCityIndex) => {
      for (let i = 0; i < numberOfCities; i++) {
        if (isConnected[currentCityIndex][i] === 1 && !visited.has(i)) {
          visited.set(i, 1);
          visit(i);
        }
      }
    }

    let visited = new Map();
    let numberOfCities = isConnected.length;
    let provinces = 0;

    for (let i = 0; i < numberOfCities; i++) {
        if (!visited.has(i)) {
          provinces++;
          visit(i);
        }
    }
    return provinces;
};
