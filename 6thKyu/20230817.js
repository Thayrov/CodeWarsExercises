//Multiples of 3 or 5

//  The Problem
/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once. */

//  The Solution

const solution = n => {
	if (n < 0) {
		return 0;
	}

	let multiples = [];
	for (let i = 0; i < n; i++) {
		const multipleBy3 = i % 3 === 0;
		const multipleBy5 = i % 5 === 0;

		if (multipleBy3 || multipleBy5) {
			multiples.push(i);
		}
	}
	return multiples.reduce((acc, curr) => acc + curr, 0);
};

/* const solution = n => Array.from({length: n}, (_, i) => i).filter(x => x % 3 === 0 || x % 5 === 0).reduce((a, b) => a + b, 0);

const solution = (n) => {
    n -= 1;  
    const sumDivisibleBy = k => {
        const m = Math.floor(n / k);
        return k * m * (m + 1) / 2;
    };
    return sumDivisibleBy(3) + sumDivisibleBy(5) - sumDivisibleBy(15);
}

const solution = n => ['3','5','15'].map(k => k * Math.floor(--n/k) * (Math.floor(n/k)+1) / 2).reduce((a,b,i,arr) => a + (i !== 2 ? b : -b), 0);
 */
//  The Test
/* console.log(solution(10) === 23, 'Failed for n = 10'); // 3 + 5 + 6 + 9 = 23
console.log(solution(16) === 60, 'Failed for n = 16'); // 3 + 5 + 6 + 9 + 10 + 12 + 15 = 60
console.log(solution(5) === 3, 'Failed for n = 5'); // 3
console.log(solution(0) === 0, 'Failed for n = 0'); // no numbers below 0
console.log(solution(1) === 0, 'Failed for n = 1'); // no numbers below 1
console.log(solution(100) === 2318, 'Failed for n = 100'); // 3 + 5 + 6 + ... + 99
console.log(solution(200) === 9168, 'Failed for n = 200'); // 3 + 5 + 6 + ... + 199 */

//############################################################################
