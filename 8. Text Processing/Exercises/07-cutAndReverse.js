function cutAndReverse(str) {
    let middle = str.length / 2;
    let leftHalf = str.slice(0, middle).split('').reverse().join('');
    let rightHalf = str.slice(middle).split('').reverse().join('');
    console.log(leftHalf);
    console.log(rightHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')