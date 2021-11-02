function zeroesToEnd(arr){
    let numZeroes = 0;
    for(let i = 0; i < arr.length - numZeroes; i++){
        if(arr[i] == 0){
            arr.splice(i,1);
            arr.push(0);
            numZeroes++;
            i--;
        }
    }
}

function shiftToRight(value, numShifts){
    return Math.floor(value / (2 ** numShifts));
}

const arr1 = [1, 2, 0, 0, 4, 0, 5];
zeroesToEnd(arr1);
console.log(`zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) => ${arr1}`)

const arr2 = [0, 0, 2, 0, 5];
zeroesToEnd(arr2);
console.log(`zeroesToEnd([0, 0, 2, 0, 5]) => ${arr2}`)

const arr3 = [4, 4, 5];
zeroesToEnd(arr3);
console.log(`zeroesToEnd([4, 4, 5]) => ${arr3}`)

const arr4 = [0, 0];
zeroesToEnd(arr4);
console.log(`zeroesToEnd([0, 0]) => ${arr4}`)

console.log(`shiftToRight(80, 3) = ${shiftToRight(80, 3)}`)
console.log(`shiftToRight(-24, 2) = ${shiftToRight(-24, 2)}`)
console.log(`shiftToRight(-5, 1) = ${shiftToRight(-5, 1)}`)
console.log(`shiftToRight(4666, 6) = ${shiftToRight(4666, 6)}`)
console.log(`shiftToRight(3777, 6) = ${shiftToRight(3777, 6)}`)
console.log(`shiftToRight(-512, 10) = ${shiftToRight(-512, 10)}`)