const SumOfNum = (num) => {

    //with reduce
    let NumArray = Array.from(String(num),Number);
    return NumArray.reduce((accum,curr)=>accum+curr,0)



  //   //without converting string
  // let sum = 0;
  // for (;num>0; num =Math.floor(num/10)){
  //     // console.log(num % 10+"nnnn")
  //     sum += num % 10
  //     // console.log(sum+"sss")
  // }
  // return sum
}

console.log(SumOfNum(1234))