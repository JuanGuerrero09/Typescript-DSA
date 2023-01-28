function pivotIndex(nums: number[]): number {
    const SUM = nums.reduce((a, b) => a + b, 0)
    let leftSum = 0
    for (let i = 0; i < nums.length; i++){
        leftSum += nums[i - 1]?+nums[i - 1]:+0
        let rightSum = SUM - nums[i] - leftSum
        if (leftSum === rightSum){
            return i
        }
    }
    return -1
};