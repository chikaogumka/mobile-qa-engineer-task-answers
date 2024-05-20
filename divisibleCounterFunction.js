function divisibleCounter(A, B, K) {
    if (A > B) {
        return 0; // If the range is invalid, return 0
    }

    // Calculate the number of integers divisible by K from 1 to B
    const countToB = Math.floor(B / K);
    
    // Calculate the number of integers divisible by K from 1 to A-1
    const countToAminus1 = Math.floor((A - 1) / K);
    
    // The number of integers divisible by K in the range [A, B]
    const result = countToB - countToAminus1;
    
    // Ensure the result is not negative
    return result < 0 ? 0 : result;
}

// Example usage:
console.log(divisibleCounter(6, 11, 2)); // Output: 3
console.log(divisibleCounter(11, 6, 2)); // Output: 0 (invalid range)
console.log(divisibleCounter(1, 10, 20)); // Output: 0 (no multiples of 20 in this range)
