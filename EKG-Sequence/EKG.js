function ecgSequenceIndex(n) {
    let usedNums = [1,2];
    let skippedNums = [3];
    let index = 0;
    if(n !== 1){
      for(i = 3; i < 3*(n) +1; i++){
        if((i% usedNums[usedNums.length-1] === 0 || usedNums[usedNums.length -1] % i === 0 || 
        (usedNums.some(x => i % x === 0 && usedNums[usedNums.length-1]%x === 0 && x !== 1)) ||
        skippedNums.some(x => i % x === 0 && usedNums[usedNums.length-1]%x === 0) ) 
        && !usedNums.includes(i)){
          usedNums.push(i);
          if(skippedNums.includes(i)){
            let index = skippedNums.findIndex(x => x === i);
            skippedNums.splice(index, 1);
          }else if(usedNums.includes(n)){
            return usedNums.findIndex(x => x === n);
          }
          i = skippedNums[0]-1;
        }else if(i !== 3 && !skippedNums.includes(i)){
          skippedNums.push(i);
        }
      }
    }
  }



console.log(ecgSequenceIndex(8))