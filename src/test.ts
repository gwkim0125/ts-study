const numbers = [10, 20, 30];

let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (let element of numbers) {
  console.log(element);
}