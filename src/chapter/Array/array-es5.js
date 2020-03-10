const a_reduce = [22, 14, 3, 8];
const reducer = (accumulator, curValue, curIndex, array) => {
  return accumulator + curValue;
};
console.log(a_reduce.reduce(reducer));
