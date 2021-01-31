/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
//递归
var preorder = function(root) {
    var ans=[];
    if(root===null) return ans;
    var dfs=(root)=>{
        ans.push(root.val);
        for(let i=0;i<root.children.length;i++){
            dfs(root.children[i]);
        }
    }
    dfs(root);
    return ans;
};


//迭代
var preorder = function(root) {
    var ans=[];
    var res=[];
    if(root===null) return ans;
    res.push(root);
    while(res.length!==0){
        var tmp=res.pop();
        for(let i=tmp.children.length-1;i>=0;i--){
            res.push(tmp.children[i]);
        }
        ans.push(tmp.val);
    }
    return ans;
};