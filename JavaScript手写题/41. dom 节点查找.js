function commonParentNode(oNode1, oNode2) {
    let parentNode1 = oNode1.parentNode
    let parentNode2 = oNode2.parentNode
    if(parentNode1 === parentNode2) {
        return parentNode1
    }else {
        commonParentNode(parentNode1, parentNode2)
    }
}