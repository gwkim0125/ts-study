type 속재료타입 = "팥" | "슈크림";
class 붕어빵 {
  private 속재료: 속재료타입;

  constructor(속재료: 속재료타입) {
    this.속재료 = 속재료;
  }

  분해() {
    return this.속재료;
  }
}

const 붕어빵1 = new 붕어빵("팥");
const 붕어빵2 = new 붕어빵("슈크림");
console.log(붕어빵1.분해());
console.log(붕어빵2.분해());
