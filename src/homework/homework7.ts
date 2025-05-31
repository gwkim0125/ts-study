export const Arrange1 = (arr: number[]) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

export const Arrange2 = (arr: number[]) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
};

export const Arrange3 = (arr: number[]) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      count = count + 1;
    }
  }
  return count;
};

export const Arrange4 = (arr: number[]) => {
  let maxNumber = arr[0];
  let minNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (maxNumber < arr[i]) {
      maxNumber = arr[i];
    } else if (minNumber > arr[i]) {
      minNumber = arr[i];
    }
  }

  return maxNumber - minNumber;
};

export const reverse = (s: string) => {
  let newString: string = "";
  for (let i = s.length - 1; i >= 0; i--) {
    newString += s[i];
  }

  return newString;
};

export const Arrange6 = (arr: number[]) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

export const Arrange7 = (arr: number[]) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count = count + 1;
    }
  }

  return count;
};

export const checkPalindrome = (s: string) => {
  let newString: string = "";
  let isPalindrome = false;
  for (let i = s.length - 1; i >= 0; i--) {
    newString += s[i];
  }
  if (newString === s) {
    isPalindrome = true;
  }
  return isPalindrome;
};

export const checkFrequency = (s: string) => {
  const frequency: Record<string, number> = {};

  for (let char of s) {
    if (frequency[char] === undefined) {
      frequency[char] = 1;
    } else {
      frequency[char] = frequency[char] + 1;
    }
  }

  let maxCount = 0;
  let candidates = [];
  for (let kvp of Object.entries(frequency)) {
    const char = kvp[0];
    const count = kvp[1];
    if (maxCount < count) {
      maxCount = count;
      candidates = [];
      candidates.push(char);
    } else if (maxCount === count) {
      maxCount = count;
      candidates.push(char);
    }
  }

  candidates.sort();
  return candidates[0];
};
