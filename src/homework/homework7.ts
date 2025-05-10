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
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count = count + 1;
        }
    }
    return count;
}

export const Arrange4 = (arr: number[]) => {
    let maxNumber = arr[0];
    let minNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (maxNumber < arr[i]) {
            maxNumber = arr[i];
        }
        else if (minNumber > arr[i]) {
            minNumber = arr[i];
        }
    }

    return maxNumber - minNumber;
}

export const reverse = (s: string) => {
    let newString:string = "";
    for (let i = s.length -1; i >= 0; i--) {
        newString += s[i];
    }

    return newString;
}

export const Arrange6 = (arr: number[]) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

export const Arrange7 = (arr: number[]) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count = count + 1;
        }
    }

    return count;
}

export const checkPalindrome = (s: string) => {
    let newString:string = "";
    let isPalindrome = false;
    for (let i = s.length -1; i >= 0; i--) {
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

