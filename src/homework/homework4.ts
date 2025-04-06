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
