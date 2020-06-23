function swapXY(str) {
    const regex = /(-)?[0-9]+/g;
const found = str.match(regex);
let text = '';
for(let i=0; i < found.length; i++){
    if(i%2 === 0){
        text += `(${found[i+1]}, `
    }else if(i%2 !== 0 && i !== str.length -1){
        text += `${found[i-1]}), `
    }
}
const finalText = text.slice(0,-2);


return finalText;


}