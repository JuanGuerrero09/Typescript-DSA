export function runningSum(nums: number[]): number[] {
    let returnedArray:number[] = nums
    for (let i = 1; i < nums.length; i++){
        returnedArray[i] = nums[i] + returnedArray[i - 1]
    }
    return returnedArray
};

console.log(runningSum([2 ,3 ,5]))