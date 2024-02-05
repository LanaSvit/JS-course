const reverseStr = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

console.log(reverseStr("some string"));

const isPolidrom = (str) => {
  let reverseStr = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  };
  return reverseStr(str) == str;
};

console.log(isPolidrom("abcd"));
console.log(isPolidrom("abcba"));

const getPaired = (arr) => {
  let paired = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 == 0) {
      paired.push(arr[i]);
    }
  }
  return paired;
};

console.log(getPaired(new Array(1, 2, 3, 4, 5, 6)));
