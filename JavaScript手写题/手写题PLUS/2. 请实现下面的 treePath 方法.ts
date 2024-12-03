/**
 * @file 二叉树所有路径
 */

type Tree = {
    value: number;
    left?: Tree;
    right?: Tree;
}
const tree: Tree = {
    value: 1,
    left: {
        value: 2,
        right: { value: 5 }
    },
    right: { value: 3 }
};

function treePath(root: Tree): string[] {
    const answer: [] = [];
    let tmp: [][] = [];
    const travel = (r: Tree) => {
        if (r == null) {
            return;
        }
        //@ts-ignore
        tmp.push(r.value);
        if (r.left == null && r.right == null) {
            //@ts-ignore
            answer.push(tmp);
            tmp = [tmp[0]]; // 重置为根节点
            return;
        }
        if (r.left) travel(r.left);
        if (r.right) travel(r.right);
    };
    travel(root);
    //@ts-ignore
    return answer.map((t) => t.join("->"));
}

console.log(treePath(tree)) // [ '1->2->5', '1->3' ]