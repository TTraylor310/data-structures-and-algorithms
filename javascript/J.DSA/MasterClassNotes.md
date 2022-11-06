# Javascript Masterclass - Algorithms and Data Structures

## Big O
  ![O(n) Chart](./big_o_complexity_chart.png)
- Constant
    - O(n+n+n) is still O(1)
- Drop constants - O(n)
    - O(n+n) is still O(2n) is just O(n)
- Drop Non-Dominants - 
    - O(n^2 + 2) is still O(n^2)
- Cut in half over and over
    - O(log n)

- Gotcha?
    - O(a+b)
```js
  function logItems(a, b) {
    for (let i = 0; i < a; i++) {
      console.log(i);
    }
    for (let j = 0; i < b; j++) {
      console.log(j);
    }
  }
```

