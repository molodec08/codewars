//kata https://www.codewars.com/kata/5594463eaf1701909c0000d4

const a = [1, 2, [3, 4], [5, 6]]

function arraySum(arr) {
  let resultArr = [];
  arr.forEach((item) => {
    if (Array.isArray(item)){
      resultArr = resultArr.concat(...item);
    } else if (typeof item == "number") {
      resultArr = resultArr.concat(item);
    }
  });
  return resultArr.reduce((prev, cur) => {
    return prev + cur;
  });
}

arraySum(a);

arraySum([1, 2]);
arraySum([1, 2, 3]);
arraySum([1, 2, [1, 2]]);
arraySum('3pig3');