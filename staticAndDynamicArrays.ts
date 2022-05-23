// Dynamic arrays

const nums : number[] = []
// add/update
nums[0] = 1
nums[1] = 2
nums[2] = 3
nums[3] = 4

// O(1)
nums.push(5);

// O(n)
nums.unshift(0)
nums.unshift(-1)

// DELETE - O(n)
nums.splice(2,1)
