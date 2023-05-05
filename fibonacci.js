function fibRecur(num) {
  if (num ==1) {
    return [0, 1];
  } else {
    let s = fibRecur(num - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}


console.log(fibRecur(10));
//fibLoop(2);
