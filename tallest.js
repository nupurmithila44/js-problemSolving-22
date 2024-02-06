const hights = [56, 43, 45, 34, 54, 77, 98, 65];

function getmax (numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}
const max = getmax(hights);
console.log(max);

function getmin (numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
}
const min = getmin(hights);
console.log(min);

