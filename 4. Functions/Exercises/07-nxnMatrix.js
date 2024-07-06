function nxnMatrix(num) {
    for (let i = 0; i < num; i++) {
        populate(num)  
    }
      
    function populate(num) {
        let result = [];
        for (let i = 0; i < num; i++) {
            result.push(num);
        }
        console.log(result.join(' '));
    }
}
