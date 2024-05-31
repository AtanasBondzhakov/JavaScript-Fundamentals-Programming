function chessBoard(num) {
    let blackMsg = `     <span class="black"></span>`;
    let whiteMsg = `     <span class="white"></span>`;
    let row = 1;
    let field = 1;
    console.log(`<div class="chessboard">`);

    for (let i = 1; i <= num; i++) {
        console.log(`  <div>`);

        for (let j = 1; j <= num; j++) {
            let currentMsg = ''

            if (field % 2 !== 0) {
                currentMsg = blackMsg;
            } else {
                currentMsg = whiteMsg;
            }
            console.log(currentMsg);
            field++
        }
        console.log(`  </div>`);

        if (row % 2 !== 0) {
            field = 2;
        } else {
            field = 1;
        }
        row++;
    }
    console.log(`</div>`);
}

chessBoard(3);
/*
<div class="chessboard">
  <div>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
  </div>
  <div>
    <span class="white"></span>
    <span class="black"></span>
    <span class="white"></span>
  </div>
  <div>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
  </div>
</div>
 */