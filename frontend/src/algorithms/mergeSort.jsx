function mergeSort(arr) {

  let steps = [];

  let array = [...arr];

  function sort(items){

    if(items.length <= 1)
      return items;

    let mid = Math.floor(items.length/2);


    let left = items.slice(0,mid);
    let right = items.slice(mid);

    steps.push([...items]);

    left = sort(left);
    right = sort(right);

    return merge(left, right);
  }

  function merge(left, right) {

    let result = [];

    while(left.length && right.length){

      if(left[0] < right[0]){
        result.push(left.shift());
      }
      else{
        result.push(right.shift());
      }

    steps.push([...result,...left,...right])
    }

    return [...result,...left,...right];
  }

  sort(array);

  return steps;

}


export default mergeSort;