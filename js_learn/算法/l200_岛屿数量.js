var numIslands = function (grid) {
  let count = 0
  if (grid.length === 0) return count
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j)
        count++
      }
    }
  }
  function dfs (grid, i, j) {
    if (i < 0 || j < 0 || j >= grid[0].length || i >= grid.length) return
    if (grid[i][j] === '1') {
      grid[i][j] = '0'
      dfs(grid, i + 1, j)
      dfs(grid, i - 1, j)
      dfs(grid, i, j + 1)
      dfs(grid, i, j - 1)
    }
  }
  return count
};