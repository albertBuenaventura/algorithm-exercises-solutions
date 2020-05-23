//https://leetcode.com/problems/number-of-islands
public class NumberOfIslands {
  static int[] dx = { 0, 0, 1, -1 };
  static int[] dy = { 1, -1, 0, 0 };
  static boolean[][] visited;
  static int numberOfIslands;
  static int n, m;
  static char[][] grid = {
      {'1','1','1','1','0'},
      {'1','1','0','1','0'},
      {'1','1','0','0','0'},
      {'0','0','0','0','0'}
    };
	
  public static void main(String[] args) {
    System.out.println(numIslands(grid));
  }
    
  public static int numIslands(char[][] grid) {
  	if(grid == null || grid.length == 0) return 0;
  	
  	numberOfIslands = 0;
  	n = grid.length;
    m = grid[0].length;
  	
  	visited = new boolean[n][m];
  	for(int x=0; x<n; x++) {
  	  for(int y=0; y<m; y++) {
  	  	if (!visited[x][y] && grid[x][y] == '1') {
  	  	  BFS(grid, x, y);
          numberOfIslands++;
        }
  	  }
  	}
  	
    return numberOfIslands;
  }
	
	static void BFS(char[][] grid, int x, int y) {
		visited[x][y] = true;

		for (int i = 0; i < 4; i++) {
			int nx = x + dx[i];
			int ny = y + dy[i];
			
			if (nx < 0 || nx >= n || ny < 0 || ny >= m || visited[nx][ny] || grid[nx][ny] == '0') continue;
			BFS(grid, nx, ny);
		}
	}
}
