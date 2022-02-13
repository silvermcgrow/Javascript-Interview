// Sort array without using default function 
let array = [20,5,1,15,11,85,78,50];
let temp;
for(let i = 0; i<array.length;i++){
    console.log(`Print I: ${array[i]}`);
    for(let j=i;j<array.length;j++){
    console.log(`Print J: ${array[j]}`);
        if(array[i]>array[j]){
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
console.log(array);
