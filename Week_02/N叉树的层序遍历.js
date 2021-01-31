/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var ans=[];
    var res=[];
    console.log(root)
    if(root===null) return ans;
    res.push(root);
    while(res.length!==0){
        var len=res.length;
        var top=[];
        for(let i=0;i<len;i++){
            var tmp=res.shift();
            for(let j=0;j<tmp.children.length;j++){
                res.push(tmp.children[j]);
            }
            top.push(tmp.val);
        }
        ans.push(top);
    }
    return ans;
};