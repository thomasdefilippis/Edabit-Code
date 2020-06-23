function canBuild(word, letters) {
    let wildTile = 0;
    letters.forEach(x => x === '#'? wildTile++: wildTile += 0 );
    const array = word.toUpperCase().split('');
    for(let i = 0; i < array.length; i++){
        if(!letters.includes(array[i])){
            wildTile -= 1;
            if(wildTile === -1){
                return false;
            }else if(i === (array.length -1)){
                return true;
            }
        }else if(i === (array.length -1)){
            return true;
        }
    }
}