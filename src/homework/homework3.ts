// 숙제 1번
const printGugudan = (x: any) => {
  let P = 0;
  while (P < x) {
    P += 1;
    console.log(`${x} X ${P} = ${x * P}`);
  }
};

// 숙제 2번
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}
