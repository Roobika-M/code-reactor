function bubbleSort(arr) {

  let steps = [];

  let array = [...arr];


  for(let i = 0; i < array.length; i++){

    for(let j = 0; j < array.length - i - 1; j++){


      steps.push([...array]);


      if(array[j] > array[j+1]){

        let temp = array[j];

        array[j] = array[j+1];

        array[j+1] = temp;

      }

    }

  }


  steps.push(array);

  return steps;

}


export default bubbleSort;