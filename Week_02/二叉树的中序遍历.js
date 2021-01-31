//递归
var inOrderSearch=(root)=>{
    var ans=[];
    var inOrder=(root)=>{
        if(!root){
            return;
        }
        inOrder(root.left);
        ans.push(root.val);
        inOrder(root.right);
    }
    inOrder(root);
    return ans;
}


//迭代
var inorderTraversal = function(root){
    const res=[];
    const stk=[];
    while(root||stk.length){
        while(root){
            stk.push(root);
            root=root.left;
        }
        root=stk.pop();
        res.push(root.val);
        root=root.right;
    }
    return res;
}