/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */


//递归方法
var postorder = function(root) {
    var res=[];
    if(root===null) return res;
    function dfs(root){
        while(root.children.length!==0){
            dfs(root.children.shift());
        }
        res.push(root.val);
    }
    dfs(root);
    return res;
};


//迭代
var postorder = function(root) {
    var res=[];
    var ans=[];
    if(root===null) return ans;
    res.push(root);
    while(res.length!==0){
        var tmp=res.pop();
        for(let i=0;i<tmp.children.length;i++){
            res.push(tmp.children[i])
        }
        ans.unshift(tmp.val);
    }
    return ans;
};