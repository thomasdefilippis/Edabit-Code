function safecracker(start, increments) {
    if(increments.length > 3 || increments.length < 3){
        return 'Increment array must have exactly 3 integers.';
    }
    let combinations = [];
    let combination;

    for(i = 0; i < 3; i++){
        if(i % 2 === 0){
            combination = start - increments[i];
            if(combination < 0){
                combinations.push(100 + combination);
                start = 100 + combination;
            }else{
                combinations.push(combination);
                start = combination;
            }
        }else{
            combination = start + increments[i];
            if(combination >= 100){
                combinations.push(combination - 100);
                start = combination - 100;
            }else{
                combinations.push(combination);
                start = combination;
            }
            console.log(start);

        }
    }

    return combinations

}