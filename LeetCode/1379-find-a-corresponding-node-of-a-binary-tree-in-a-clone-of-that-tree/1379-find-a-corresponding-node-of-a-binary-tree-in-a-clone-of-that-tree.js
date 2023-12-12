var getTargetCopy = function(original, cloned, target) {
    if (!original || original === target) {
        return cloned;
    }

    /* 
    original 트리의 왼쪽 서브트리와 cloned 트리의 왼쪽 서브트리를 대상
    왼쪽 서브트리에서 target 노드를 찾아냄
    */
    let leftSide = getTargetCopy(original.left, cloned.left, target);
    if (leftSide) {
        return leftSide;
    }

    let rightSide = getTargetCopy(original.right, cloned.right, target);
    if (rightSide) {
        return rightSide;
    }
    
};