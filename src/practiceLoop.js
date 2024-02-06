const longestCommonString = (arr) => {
  let commonString = "";

  if (arr.length === 0) {
    return commonString;
  }

  arr.sort((a, b) => a.length - b.length);

  for (let i = 0; i < arr[0].length; i++) {
    if (arr.every((str) => str[i] === arr[0][i])) {
      commonString += arr[0][i];
    } else {
      break;
    }
  }

  return commonString;
};

console.log(longestCommonString(["flower", "flow", "flight"]));
console.log(longestCommonString(["dog", "racecar", "car"]));
