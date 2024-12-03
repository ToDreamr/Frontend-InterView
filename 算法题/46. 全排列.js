/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = []
    const res = []
    const dfs = (nodes, res) => {
        if(res.length === nums.length) {
            result.push([...res])
            return
        }

        for(let i = 0; i < nodes.length; i++) {
            res.push(nodes[i])
            const temp = [...nodes]
            temp.splice(i, 1)
            dfs(temp, res)
            res.pop()
        }
    }
    dfs(nums, res)
    return result
};

// console.log(permute([1, 2, 3]))