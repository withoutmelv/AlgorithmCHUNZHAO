/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */



### 解法一 最小堆、优先队列 (堆的实现在最下面)
var topKFrequent = function(nums, k) {
    //创建以及初始化频次数组ans
    //建议使用MAP,不要使用对象，不然键会是一个字符串
	var count=new Map();
    var ans=[];
    var index=0;
    for(let i=0;i<nums.length;i++){
        if(!count.has(nums[i])){
            count.set(nums[i],1)
        }else{
            var tmp=count.get(nums[i]);
            count.set(nums[i],++tmp);
        }
    }
    for(let [key,value] of count){
        ans[index]=[key,value];
        index++;
    }
    console.log(ans)
    //创建最小堆
    let	minHeap = new BinaryHeap((a, b) => a[1] - b[1]);
    let res=[];
    for(let i=0;i<k;i++){
        minHeap.insert(ans[i]);
    }
    for(let j=k;j<ans.length;j++){
        if(minHeap.top()[1]<ans[j][1]){
            minHeap.deleteItem(0);
            minHeap.insert(ans[j]);
        }
    }
    for(let m=0;m<minHeap.data.length;m++){
        res.push(minHeap.data[m][0]);
    }
    return res;
};









### 解法二 快速选择
var topKFrequent = function(nums, k) {
    // if(k>=nums.length) return nums;
    var count=new Map();
    var ans=[];
    var index1=0;
    for(let i=0;i<nums.length;i++){
        if(!count.has(nums[i])){
            count.set(nums[i],1)
        }else{
            var tmp=count.get(nums[i]);
            count.set(nums[i],++tmp);
        }
    }
    for(let [key,value] of count){
        ans[index1]=[key,value];
        index1++;
    }
    function findKth(nums,left,right,k){
        if(left>=right){
            return ;
        }
        var index=quickSelect(nums,left,right);
        if(index===k){
            return ;
        }else if(index<k){
            findKth(nums,index+1,right,k);
        }else{
            findKth(nums,left,index-1,k);
        }
    }
    function quickSelect(arr,left,right){
        if(left<right){
            var x=arr[right][1],i=left-1,temp;
            for(var j=left;j<=right;j++){
                if(arr[j][1]>=x){
                    i++;
                    temp=arr[j];
                    arr[j]=arr[i];
                    arr[i]=temp;
                }
            }
        }
        return i;
    }
    findKth(ans,0,ans.length-1,k);
    var result=[];
    for(let m=0;m<k;m++){
        result[m]=ans[m][0];
    }
    return result;
}




PS 下面是堆的实现
class BinaryHeap{
    constructor(compare){
        this.data=[];
        this.compare=compare;
    }
    
    top(){
        if(this.data.length===0) reutrn null;
        return this.data[0];
    }
    
    insert(value){
        this.insertAt(this.data.length,value);
    }
    
    insertAt(index, value) {    
        this.data[index] = value;    
        // 对比当前节点与其父节点，如果当前节点更小就交换它们    
        while (index > 0 && 
               this.compare(value, this.data[Math.floor((index - 1) / 2)]) < 0) {     
            this.data[index] = this.data[Math.floor((index - 1) / 2)];      
            index = Math.floor((index - 1) / 2);    
        }  
        this.data[index] = value;
    }
    
    deleteItem(index){
        if (this.data.length === 0) return;    
        let value = this.data[index]; 
        let i=index;
        while(i<this.data.length){
            var left=i*2+1;
            var right=i*2+2;
            if(left>this.data.length) break;
            if(right>this.data.length){
                this.data[i]=this.data[left];
                i=left;
                break;
            }
            if(this.compare(this.data[left],this.data[right])<0){
                this.data[i]=this.data[left];
                i=left;
            }else{
                this.data[i]=this.data[right];
                i=right;
            }
        }
        
        if(i<this.data.length-1){
            this.insertAt(i,this.data.pop());
        }else{
            this.data.pop();
        }
        return value;
    }
}