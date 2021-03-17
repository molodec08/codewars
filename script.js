//kata https://www.codewars.com/kata/59d398bb86a6fdf100000031

const a = 'This is an example string';
const b = 'xswe6mzw3626ymq5ulkh5k0c62ozbhi7z599730qbkpnq57pi'
const c = 'kcznibwdf9gf4yoof0wltyovalkfgzvq315hb7016fvfqhn'

function stringBreakers(n, string){
  let result = [];
  let arr = []
  for(let i = 0; i < (string.length/n); i++) {
    arr = [...arr, [...string]
      .filter(el => el != ' ')
      .slice((i*n),(i*n)+n)];
    result.push(arr[i].join(''));
  }
  return result.join('\n');
}

stringBreakers(5, a);
stringBreakers(8, b);
stringBreakers(1, c);