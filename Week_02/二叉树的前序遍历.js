
//递归
var preOrderSearch=(root)=>{
    var ans=[];
    var preOrder=(root)=>{
        if(!root){
            return;
        }
        ans.push(root.val);
        preOrder(root.left);
        preOrder(root.right);
    }
    preOrder(root);
    return ans;
}


//迭代
var preOrderSearch=(root)=>{
    if(root===null){
        return [];
    }
    var stack=[];//创建栈
    var ans=[];
    stack.push(root);
    while(stack.length!==0){
        var node=stack.pop();
        ans.push(node.val);
        if(node.right!==null) stack.push(node.right);//先将右节点放进栈中
        if(node.left!==null) stack.push(node.left);//左节点先出栈，左子树的值先进入ans中
    }
    return ans;
}