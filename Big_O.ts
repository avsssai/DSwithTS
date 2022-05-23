// Constant time 

function ConstantTime() {
    let n = 12; // 1 opearation
    for(let i=0; i< n; i++) { // 12 operations
        return i + 2 // one operation
    }
}

// TOTAL - f(n) = 1 + 12(1) = O(13) - therefore O(1)

// Linear Time

function LinearTime(target: number, arr: number[]) {
    for (let n of arr){ // n times
        if(n === target) { // 1 operation
            return true // 1 operation
        }
    }
    return false // 1 operation
}
 
// TOTAL - f(n) = n(1 + 1) for a one input array , O(f(n)) = O(2n) = O(n)

// Quadratic time

function printPairs(n: number) {
    for(let i = 0; i<=n; i++) { // n times
        for(let j= i+1; j<=n; j++) { // n-1 times
            console.log(`${i}, ${j} `) // 1 operation
        }
    }
}

// TOTAL -  f(n) = n(n-1) = n^2 - n 
// so O(f(n)) = O(n^2)

// Logarithmic time
// Binary search - search algorithm in sorted arrays
function contains(target: number, nums: number[]) :  boolean {
    let low = 0; // one operation
    let high = nums.length - 1; // one operation
    while(low <= high) { // logn times
        let mid = Math.floor(high + low/2); // 1 operation
        if(nums[mid] === target) { // 1
            return true // 1
        }else if(target < mid) { // 1
            low = mid + 1 // 1
        } else if(target > mid) { // 1
            high = mid - 1 // 1
        }
    }

    //target not found
    return false; // 1 operation
}

contains(8, [1,2,3,4,5,6,7,8]) // 0(log(n))

// f(n) = 1 + 1 + 1 + 4 log(n) = 3 + 4log(n) = O(log(n))

// Combined run time
function combined(n: number) {
    ConstantTime() // O(1)
    printPairs(n) // O(n)
    contains(n, [1,23,4,5]) // O(n^2) 
}

// f(O(n)) = O(1) + O(n) + O(n^2) = O(n^2)
