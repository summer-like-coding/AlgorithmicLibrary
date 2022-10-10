class NumMatrix {
    // 设置一个前缀和数组
    preSum:number[][] = []
    constructor(matrix: number[][]) {
        let m = matrix.length;
        let n = matrix[0].length;
        if(m === 0 || n=== 0){
            return;
        }
        for (let i = 0; i <= m; i++) {
            this.preSum[i]=[]
            for (let j = 0; j <= n; j++) {
                this.preSum[i][j]=0
            }
        }

        for(let i = 1;i<=m;i++){
            for(let j = 1;j<=n;j++){
                this.preSum[i][j] = this.preSum[i-1][j]+this.preSum[i][j-1]+matrix[i-1][j-1]-this.preSum[i-1][j-1]
            }
        }
    }
    
    
    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        console.log("presum",this.preSum);
        return this.preSum[row2+1][col2+1]-this.preSum[row1][col2+1]-this.preSum[row2+1][col1]+this.preSum[row1][col1]
    }
}
let obj = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]])
let params = obj.sumRegion(2, 1, 4, 3)
console.log(params);
