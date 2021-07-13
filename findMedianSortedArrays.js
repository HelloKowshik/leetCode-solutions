let nums1 = [1, 3];
let nums2 = [2];
nums1 = [1, 3];
nums2 = [2, 7];
// nums1 = [1, 2];
// nums2 = [3, 4];
// nums1 = [];
// nums2 = [1];
// nums1 = [2];
// nums2 = [];
const findMedianSortedArrays = function (nums1, nums2) {
  let mergedArr = [...nums1, ...nums2].sort((a, b) => a - b);
  let isEven = mergedArr.length / 2;
  let isOdd = mergedArr.length % 2;
  if (isOdd > 0) {
    return mergedArr[Math.floor(mergedArr.length / 2)];
  } else {
    return (mergedArr[isEven] + mergedArr[isEven - 1]) / 2;
  }
};

console.log(findMedianSortedArrays(nums1, nums2));
