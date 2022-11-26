function maxSlidingWindow(nums: number[], k: number): number[] {
    // 设置一个单调队列
    let queue = new MonotonicQueue();
    let res:number[] = []
    for(let i = 0;i<nums.length;i++){
        if(i<k-1){
            // 每次push进去的值都会进行比较
            queue.push(nums[i])
        }else{
            // 将下一个数放入队列
            queue.push(nums[i])
            // 将最大值放入
            res.push(queue.max())
            // 移除第一个元素
            queue.pop(nums[i-k+1])
        }
    }
    return res
};

// 首先先实现一个单调队列
// 什么意思，就是，这个队列是从大向小的排列，并且还具有，先进先出的特点
// 我们可以使用一个数组来实现
class MonotonicQueue{
    // 首先，设置一个数组
    public maxq:Array<number>;
    constructor(){
        this.maxq = new Array();
    }
    // 队列实现，增加元素
    // 必须保证，增加的元素，从大向小的排列的
    push(val:number):void{
        // 当前面没有值比他大的时候
        while(this.maxq.length && this.maxq[this.maxq.length-1]<val){
            // 那么就将原来的数删除
            this.maxq.pop()
        }
        this.maxq.push(val)
    }
    // pop 删除前面一个元素val
    pop(val:number):void{
        // 
        if( val === this.maxq[0]){
            // 那么就删除第一个元素
            this.maxq.shift()
        }
    }
    // 获取最大的元素
    // 因为现在实现的是，最大的元素就是第一个元素
    max():number{
        return this.maxq[0]
    }
}
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3))