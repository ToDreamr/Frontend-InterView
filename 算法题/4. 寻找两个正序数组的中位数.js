/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var len1 = nums1.length
    var len2 = nums2.length
    var len = len1 + len2
    var k = Math.ceil(len / 2)
    var x = k
    var flag = Math.floor(k / 2)
    while(flag && len1!==0 && len2!==0) {
        // 如果A小，删除A前面的部分
        if(nums1[flag - 1] < nums2[flag - 1]) {
            nums1 = nums1.slice(flag)
        }
        else {
            nums2 = nums2.slice(flag)
        }
        k = k - flag
        console.log('len的取值',k)
        flag = Math.floor(k / 2)
        console.log('flag的取值',flag)
    }
    if(len1 === 0) {
        console.log(len2)
        if(len2 % 2 === 0) {
            return nums2[x-1]/2 + nums2[x]/2
        }
        else return nums2[x-1]
    }

    if(len2 === 0){
        if(len1 % 2 === 0) {
            return nums1[x-1]/2 + nums1[x]/2
        }
        else return nums1[x-1]
    }
    if(len % 2 === 0) {
        if(len === 2) {
            return nums2[0]/2 + nums1[0]/2
        }
        if(nums2.length === 1 && len!== 2) {
            return nums1[0]/2 + Math.min(nums2[0]/2,nums1[1]/2)
        }
        else if(nums1.length === 1 && len!== 2) {
            return nums2[0]/2 + Math.min(nums1[0]/2,nums2[1]/2)
        }
    }
    else {
        return nums1[0] > nums2[0] ? nums2[0] : nums1[0]
    }
};

const num1 = [0,0,1,1,1]
const num2 = [-1,0,0,0,0,0,1]
console.log(findMedianSortedArrays(num2, num1));