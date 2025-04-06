// 숙제4 - 1//
export const addAll = (x: number) => {
  return (x * (1 + x)) / 2;
};
export const addAllv2 = (x: number) => {
  let sum = 0;
  let i = 1;
  while (i <= x) {
    sum = sum + i;
    i = i + 1;
  }
  return sum;
};

// 숙제4 - 2

export const addOdd = (x: number) => {
  let sum = 0;
  let i = 1;
  while (i <= x) {
    if (i % 2 !== 0) {
      sum = sum + i;
    }
    i = i + 1;
  }
  return sum;
};

//숙제 4 - 3

export const checkPrime = (x: number) => {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }
  return true;
};

// // 숙제 4 - 4
// count i
//  6    7

export const countPrime = (x: number) => {
  let count = 0;
  for (let i = 2; i <= x; i++) {
    if (checkPrime(i) === true) {
      count = count + 1;
    }
  }
  return count;
};

//과제 1
export const addEvery = (x: number) => {
  let quotient = 0;
  let remains = 0;
  let answer = 0;
  if (x > 10) {
    quotient = x / 10;
    remains = x % 10;
    answer = remains + answer;
  } else {
    answer = x + answer;
    return answer;
  }
};

//과제 2
export const getNthFibonacci = (n: number) => {
  let i = 1;
  let currentPNumber = 1;
  let nextPNumber = 1;
  while (n !== i) {
    i += 1;
    nextPNumber = currentPNumber + nextPNumber;
    currentPNumber = nextPNumber - currentPNumber;
  }
  return currentPNumber;
};
