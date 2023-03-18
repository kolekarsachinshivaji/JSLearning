// //011235811

function fabSeries(fabterm) {
  let first = 0;
  let second = 1;
  let third = 0;
  for (let index = 0; index < fabterm; index++) {
    console.log(first);
    third = first + second;
    first = second;
    second = third;
  }
}
fabSeries(7);



