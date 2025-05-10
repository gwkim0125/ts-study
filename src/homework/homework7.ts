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
}

export const Arrange3 = (arr: number[]) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum = sum + 1;
        }
    }
    return sum;
}

export const Arrange4 = (arr: number[]) => {
    let largestElement = arr[0];
    let smallestElement = arr[1];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (largestElement < arr[i]) {
            largestElement = arr[i];
        }
        else if (smallestElement > arr[i]) {
            smallestElement = arr[i];
        }
    }
    sum = largestElement - smallestElement;
    return sum;
}

export const reverse = (s: string) => {
    let newString:string = "";
    for (let i = s.length; i >= 0; i--) {
        newString += s[i];
    }
    return newString;
}

export const Arrange6 = (arr: number[]) => {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        count = count + 1;
    }
    sum = sum / count
    return sum;
}

export const Arrange7 = (arr: number[]) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

export const checkPalindrome = (s: string) => {
    let newString:string = "";
    let isPalindrome = false;
    for (let i = s.length; i >= 0; i--) {
        newString += s[i];
    }
    if (newString === s) {
        isPalindrome = true;
    }
    return isPalindrome;
}

export const checkFrequency = (s: string) => {
    let mostFrequent:string = "";
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === mostFrequent) {
            sum = sum + 1;
        }
    }
}

