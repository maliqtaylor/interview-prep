//Leetcode 
let code = [5, 7, 1, 4]
let k = 3

var decrypt = function (code, k) {

  if (k === 0) {
    return new Array(code.length).fill(0)
  }

  let output = []

  code.forEach((num, i) => {
    let ref;
    k > 0 ? ref = i + 1 : ref = i - 1
    output.push(findVal(k, ref, code))
  })

  return output
};

function findVal(k, ref, code, sum = 0) {

  if (k === 0) return sum

  if (code[ref]) {
    sum += code[ref]
  } else {
    k > 0 ? ref = 0 : ref = code.length - 1
    sum += code[ref]
  }

  k > 0 ? k -= 1 : k += 1
  k > 0 ? ref += 1 : ref -= 1

  return findVal(k, ref, code, sum)

}
//---------------------------------