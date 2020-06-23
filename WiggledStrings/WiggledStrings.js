function wiggleString(str) {
	const arr = [];
	let j = '';
	let word = '';
	let num = 1;
	for(let i = 0; i < (str.length*2 + 1); i++){
		if(i < str.length){
			arr.push(`${j}${str}`);
			j = j + ' ';
		}else if (i === str.length){
			word = `${j}${str}`;
			arr.push(`${j}${str}`)
		}else{
			arr.push(word.slice(num));
			num = num + 1;
        }
}