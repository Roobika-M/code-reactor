function mergeSort(arr) {

  let steps = [];
  let array = [...arr];


  function addStep(arr, message, highlight = []) {

    steps.push({
      array: [...arr],
      message,
      highlight
    });

  }


  function sort(items) {

    if (items.length <= 1)
      return items;


    let mid = Math.floor(items.length / 2);

    let left = items.slice(0, mid);
    let right = items.slice(mid);


    addStep(
      items,
      "Splitting"
    );


    left = sort(left);
    right = sort(right);


    return merge(left, right);

  }



  function merge(left, right) {

    let result = [];


    while (left.length && right.length) {


      addStep(
        result.concat(left, right),
        `Comparing ${left[0]} and ${right[0]}`,
        [0, 1]
      );


      if (left[0] < right[0]) {

        result.push(left.shift());

      } else {

        result.push(right.shift());

      }


      addStep(
        result.concat(left, right),
        "Placing element",
        []
      );

    }


    let merged = [
      ...result,
      ...left,
      ...right
    ];


    addStep(
      merged,
      "Merged",
      []
    );


    return merged;

  }


  sort(array);

  return steps;

}


export default mergeSort;