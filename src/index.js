
// You should implement your task here.

  // Проверка на заполненность массива
  function isArrayFilled(array){
    if(array.length != 0){
      return 1;
    } else{
        return 0;
    }
  }
  
  // Проверка на тип введенно атрибута (нужен массив)
  function isArrayNorm(array){
    if(Array.isArray(array) == 1){
      return isArrayFilled(array);
    } else{
        return 0;
    }
  }


module.exports = function towelSort (matrix) {
  if(isArrayNorm(matrix) == true){

    let unifiedArray = [];

    if(matrix.length > 1){
      for(let i=1 ; i <= (Math.floor(matrix.length/2)+1) ; i+=2 ){
        matrix[i].reverse();
      }
    }

    for(let i=0 ; i < matrix.length ; i++){
      unifiedArray = unifiedArray.concat(matrix[i]);
    }
    
    

    return unifiedArray;
  } else{
    return [];
  }
}
